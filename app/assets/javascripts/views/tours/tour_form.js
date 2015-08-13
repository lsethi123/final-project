Tryable.Views.TourForm = Backbone.CompositeView.extend({

  template: JST['tours/form'],
  tagName: 'form',

  events: {
    "click .upload-button" : "upload"
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.collection, "sync", this.render );
    this.collection.each(this.addPhotoView.bind(this));
    this.listenTo(this.collection, "add", this.addPhotoView);
    this.listenTo(this.collection, 'remove', this.removePhotoView);
  },

  render: function (){
    var content = this.template( {tour: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPhotoView: function(image){
    console.log("addphotoview called")
    var subview = new Tryable.Views.ImageItem({ model: image });
    this.addSubview('.images', subview);
  },

  removePhotoView: function(image) {
    this.removeModelSubview('.images', tour)
  },

  upload: function(e){
    e.preventDefault();
    var that = this;
    var image = new Tryable.Models.Image();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      var data = result[0];
      image.set( {
        url: data.url,
        thumb_url:
        data.thumbnail_url,
        imageable_type: "Tour"
      });
      image.save({}, {
        success: function(){
          that.collection.add(image);
        }
      })
    })
  }

});
