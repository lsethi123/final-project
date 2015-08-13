Tryable.Views.TourForm = Backbone.View.extend({

  template: JST['tours/form'],
  tagName: 'form',

  events: {
    "click .upload-button" : "upload"
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function (){
    var content = this.template( {tour: this.model });
    this.$el.html(content);
    return this;
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
