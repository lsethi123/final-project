Tryable.Models.Tour = Backbone.Model.extend({
  urlRoot: 'api/tours',

  images: function (){
    if (!this._images){
      this._images = new Tryable.Collections.Images();
    }
    return this._images;
  },

  provider: function(){
    if (!this._provider){
      this._provider = new Tryable.Models.User();
    }
    return this._provider;
  },

  parse: function (response) {
    if (response.images){
      this.images().set(response.images, { parse: true });
      response.images.remove;
    }

    this.provider().set(response.provider, {parse: true});
    response.provider.remove;

    return response;
  }

});
