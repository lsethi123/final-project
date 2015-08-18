Tryable.Views.TourImages = Backbone.CompositeView.extend({
  template: JST['images/tour_images'],

  initialize: function (){
    this.collection.each(this.addPhotoView.bind(this))
    this.listenTo(this.collection, "sync", this.render );
    this.listenTo(this.collection, "add", this.addPhotoView);
  },

  render: function (){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPhotoView: function(image){
    var subview = new Tryable.Views.TourImage({model: image, collection: this.collection});
    this.addSubview('.tour-images', subview);
  }

});
