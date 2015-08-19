Tryable.Views.ImageUploader = Backbone.CompositeView.extend({
  template: JST['images/form'],
  events: {
    "click .upload-button" : "upload",
    'click .done' : "done"
  },

  initialize: function (options){
    this.listenTo(this.model, "sync", this.render);
    this.collection = new Tryable.Collections.Images();
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
    var subview = new Tryable.Views.FormImageItem({
        model: image,
        cloudinary_options: {width: 500, height: 300, crop: 'fill'} });
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
            url: data.public_id,
            thumb_url: data.thumbnail_url,
            imageable_type: "Tour",
            imageable_id: that.model.escape('id')
        });
        image.save({}, {
          success: function(){
            that.collection.add(image);
          }
        });
      });
    });
  },

  done: function(){
    if (this.collection.length ===0){
      var defaultImg = new Tryable.Models.Image({
        imageable_type: "Tour",
        imageable_id: this.model.escape('id'),
        url: "static/default_"+ this.model.escape('destination_id')
      });

      defaultImg.save( {}, {
        success: function(){
          Backbone.history.navigate('/tours/' + this.model.escape('id'), {trigger: true});
        }.bind(this)});
    } else {
      Backbone.history.navigate('/tours/' + this.model.escape('id'), {trigger: true});
    }
  }

});
