Tryable.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  image: function (){
    if (!this._image){
      this._image = new Tryable.Models.Image();
    }
    return this._image;
  },

  tours: function(){
    if (!this._tours){
      this._tours = new Tryable.Collections.Tours();
    }
    return this._tours;
  },

  parse: function (response) {
    if (response.image){
      this.image().set(response.image, { parse: true });
      delete response.image;
    }

    if (response.tours){
      this.tours().set(response.tours, { parse: true });
      delete response.tours;
    }
    return response;
  }

});
