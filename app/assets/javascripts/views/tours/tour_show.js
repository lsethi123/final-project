Tryable.Views.TourShow = Backbone.CompositeView.extend({
  template: JST['tours/show'],
  events: {
    'click .submit-booking' : 'confirmBooking'
  },

  initialize: function (options){
    this.booking = options.booking;
    this.listenTo(this.collection, "sync", this.render );
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.model, "sync", this.addHeaderView);
    this.listenTo(this.model, "sync", this.addProvider);
    this.listenTo(this.model, "sync", this.addRatings);
    this.listenTo(this.model,"sync", this.addBookingView);
    this.listenTo(this.model, "sync", this.addPhotos);
  },

  render: function (){
    var content = this.template( {tour: this.model, images: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addHeaderView: function(){
    var first_img = this.model.images().at(0);
    var img = $.cloudinary.image(first_img.escape('url'), {width: 1800, height: 400, brightness:-60, crop: 'fill'});
    this.$('.tour-header').html(img);
  },

  addBookingView: function(){
    var subview = new Tryable.Views.BookingForm({ model: this.model, collection: this.collection });
    this.addSubview('.booking-form', subview);
  },

  addRatings: function(){
    var subview = new Tryable.Views.ReviewsIndex({collection: this.model.reviews(), model: this.model});
    this.addSubview('.reviews', subview);
  },

  addPhotos: function(){
    var subview = new Tryable.Views.TourImages({collection: this.model.images() });
    this.addSubview('.photos-index', subview);
  },

  addProvider: function(){
    this.provider = this.model.provider();
    var subview = new Tryable.Views.UserShow({model: this.provider });
    this.addSubview('.provider', subview);
  },

  confirmBooking: function(e){
    e.preventDefault();
    // var formData = this.$el.serializeJSON();
    var booking = new Tryable.Models.Booking();
    booking.set('tour_date', this.$('.date-picker').datepicker('getDate'));
    booking.set('tour_id', this.model.escape('id'));
    var subview = new Tryable.Views.BookingConfirmation({ model: booking, tour: this.model, collection: this.collection });
    this.$el.html(subview.render().$el);
  },

});
