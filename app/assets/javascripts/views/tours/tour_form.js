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

    this.listenTo(this.model, "change:[id]", this.linkPhotos)
  },

  render: function (){
    // debugger;
    var content = this.template( {tour: this.model, places: this.places });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addPhotoView: function(image){
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
    var that = this;
    e.preventDefault();
    var formData = this.$el.find('form').serializeJSON();
    var tour = new Tryable.Models.Tour(formData.tour);

    tour.save({}, {
      success: function (){
        tour.fetch({ success: function () {
          that.collection.each( function (photo) {
            photo.set({ imageable_id: tour.get('id') });
            photo.save();
          });
          Backbone.history.navigate('#/tours/'+tour.get('id'), { trigger: true });
        } });
      },
      error: function (response){
          console.log("Error callback called");
          debugger;
        }
     } );
  },

  linkPhotos: function(){
    console.log("LinkTour called");
    console.log("Model id:");
    console.log(this.model.get('id'));
    this.collection.each( function (photo) {
      photo.set({ imageable_id: this.model.get('id') });
      photo.save();
    });
  }

});
