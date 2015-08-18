Tryable.Views.TourShow = Backbone.CompositeView.extend({

  template: JST['tours/show'],

  events: {
    'click button.submit-booking' : 'confirmBooking',
  },

  initialize: function (options){
    this.booking = options.booking;
    this.listenTo(this.collection, "sync", this.render );
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.model, "sync", this.addPhotos);
    this.listenTo(this.model, "sync", this.addProvider);
    this.listenTo(this.model, "sync", this.addRatings);
    this.addBookingView();
  },

  render: function (){
    var content = this.template( {tour: this.model, images: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
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
    this.images = this.model.images();
    var first_img = this.images.at(0);
    this.addHeaderView(first_img);
    this.images.each(this.addPhotoView.bind(this));
  },

  addHeaderView: function(image){
      var subview = new Tryable.Views.ImageItem({model: image, hasModal: false, editable: false, width: 1800, height: 400});
      this.addSubview('.tour-header', subview);
  },

  addPhotoView: function(image){
    var subview = new Tryable.Views.ImageItem({model: image, hasModal: true, editable: false, width: 300, height: 200});
    this.addSubview('.photos-index', subview);
  },

  addProvider: function(){
    this.provider = this.model.provider();
    var subview = new Tryable.Views.UserShow({model: this.provider });
    this.addSubview('.provider', subview);
  },

  confirmBooking: function(e){
    e.preventDefault();
    var formData = this.$el.serializeJSON();
    this.booking.set('tour_id', this.model.escape('id'));
    this.booking.set('tour_date', this.$('.date-picker').datepicker('getDate'));
    Backbone.history.navigate('#bookings/new', {trigger: true});
  },

});
