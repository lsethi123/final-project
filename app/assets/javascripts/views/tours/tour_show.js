Tryable.Views.TourShow = Backbone.CompositeView.extend({

  template: JST['tours/show'],

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render );
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.model, "sync", this.addPhotos);
    this.listenTo(this.model, "sync", this.addProvider);
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

  addPhotos: function(){
    this.images = this.model.images();
    // this.$el.find('.jumbotron').css('background-image', url(header_url) );
    this.images.each(this.addPhotoView.bind(this));
  },

  addPhotoView: function(image){
    var subview = new Tryable.Views.ImageItem({model: image, editable: false});
    this.addSubview('.photos-index', subview);
  },

  addProvider: function(){
    this.provider = this.model.provider();
    var subview = new Tryable.Views.UserShow({model: this.provider });
    this.addSubview('.provider', subview);
  }

});
