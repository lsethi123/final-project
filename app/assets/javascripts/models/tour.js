Tryable.Models.Tour = Backbone.Model.extend({
  urlRoot: 'api/tours',

  images: function (){
    if (!this._images){
      this._images = new Tryable.Collections.Images();
    }
    return this._images;
  },

  parse: function (response) {
    if (response.images){
      this.images().set(response.images, { parse: true });
      response.images.remove;
    }
    return response;
  }

});
