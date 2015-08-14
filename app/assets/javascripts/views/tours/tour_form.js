Tryable.Views.TourForm = Backbone.CompositeView.extend({

  template: JST['tours/form'],

  events: {
    "click .upload-button" : "upload",
    "click .submit-booking" : 'submit'
  },

  initialize: function (options){
    this.places = options.places
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.collection, "sync", this.render );
    this.listenTo(this.places, "sync", this.render);
    this.collection.each(this.addPhotoView.bind(this));
    this.listenTo(this.collection, "add", this.addPhotoView);
    this.listenTo(this.collection, 'remove', this.removePhotoView);
  },

  render: function (){
    // debugger;
    var content = this.template( {tour: this.model, places: this.places });
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
    this.removeModelSubview('.images', image)
  },

  upload: function(e){
    e.preventDefault();
    var that = this;

    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      result.forEach( function (data){
        var image = new Tryable.Models.Image();
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
    })
  },

  submit: function(e){
    e.preventDefault();
    var formData = this.$el.find('form').serializeJSON();
    var tour = new Tryable.Models.Tour(formData.tour);

    tour.save({}, {
      success: function (){
        tour.fetch();
        // this.collection.add(tour);
        Backbone.history.navigate('#/tours/'+tour.get('id'), { trigger: true });
      }.bind(this),
      error: function (response){
          console.log("Error callback called");
          debugger;
        }
     } );
  }

});
