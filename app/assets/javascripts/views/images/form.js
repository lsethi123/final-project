Tryable.Views.ImageUploader = Backbone.CompositeView.extend({
  template: JST['images/form'],
  events: {
    "click .upload-button" : "upload",
    'click .done' : "linkPhotosToId"
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
    var subview = new Tryable.Views.ImageItem({ model: image, editable: true, width: 500, height: 300});
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
        // debugger;
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

  linkPhotosToId: function(){
    this.collection.each( function (photo) {
      photo.save( {imageable_id: this.model.escape('id')} );
    }.bind(this) );
    if (this.collection.length === 0){
      this.addDefaultImg();
    } else {
      Backbone.history.navigate('/tours/' + this.model.escape('id'), {trigger: true});
    }

  },

  addDefaultImg: function(){
    var defaultImg = new Tryable.Models.Image({
      imageable_type: "Tour",
      imageable_id: this.model.escape('id'),
      url: $.cloudinary.image("static/default_"+ this.model.escape('destination_id')+".jpg").attr('src')
    });
    defaultImg.save({}, {success: function(model, response){
      Backbone.history.navigate('/tours/' + this.model.escape('id'), {trigger: true});
    }.bind(this)});
  }

});
