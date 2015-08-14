Tryable.Views.TourForm = Backbone.CompositeView.extend({
  template: JST['tours/form'],
  events: {
    "click .submit-booking" : 'submit'
  },

  initialize: function (options){
    this.places = options.places;
    this.collection = new Tryable.Collections.Images();
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.places, "sync", this.render);
    this.addImageUploader();
  },

  render: function (){
    var content = this.template( {tour: this.model, places: this.places });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addImageUploader: function(){
    var subview = new Tryable.Views.ImageUploader({ collection: this.collection });
    this.addSubview('.image-upload', subview);
  },

  submit: function(e){
    var that = this;
    e.preventDefault();
    var formData = this.$el.find('form').serializeJSON();
    this.model.set(formData.tour);

    this.model.save( {}, {
      success: function (model, response ){
          that.linkPhotosToId(response.id);
          Backbone.history.navigate('#/tours/' + response.id, { trigger: true });
      },
      error: function (response){
          console.log("Error callback called");
      }
    });
  },

  linkPhotosToId: function(id){
    this.collection.each( function (photo) {
      photo.save( {imageable_id: id} );
    });
  }

});
