Tryable.Views.ImageUploader = Backbone.CompositeView.extend({
  template: JST['images/form'],
  events: {
    "click .upload-button" : "upload",
  },

  initialize: function (options){
    this.listenTo(this.collection, "sync", this.render );
    this.collection.each(this.addPhotoView.bind(this));
    this.listenTo(this.collection, "add", this.addPhotoView);
    this.listenTo(this.collection, 'remove', this.removePhotoView);
  },

  render: function (){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPhotoView: function(image){
    var subview = new Tryable.Views.ImageItem({ model: image });
    this.addSubview('.images', subview);
  },

  removePhotoView: function(image) {
    this.removeModelSubview('.images', image);
  },

  upload: function(e){
    e.preventDefault();
    var that = this;

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      result.forEach( function (data){
        var image = new Tryable.Models.Image({
            url: data.url,
            thumb_url:
            data.thumbnail_url,
            imageable_type: "Tour"
        });
        image.save({}, {
          success: function(){
            that.collection.add(image);
          }
        });
      });
    });
  },

});
