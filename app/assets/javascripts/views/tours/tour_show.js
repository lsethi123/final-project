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
    var first_img = this.images.at(1);
    // this.$el.find('.jumbotron').css('background-image', url(header_url) );
    this.addHeaderView(first_img);
    this.images.each(this.addPhotoView.bind(this));
  },

  addHeaderView: function(image){
    var subview = new Tryable.Views.ImageItem({model: image, editable: false, width: 1500, height: 400});
    this.addSubview('.tour-header', subview);
  },

  addPhotoView: function(image){
    var subview = new Tryable.Views.ImageItem({model: image, editable: false, width: 300, height: 200});
    this.addSubview('.photos-index', subview);
  },

  addProvider: function(){
    this.provider = this.model.provider();
    var subview = new Tryable.Views.UserShow({model: this.provider });
    this.addSubview('.provider', subview);
  }

});
