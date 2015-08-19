Tryable.Models.User = Backbone.Model.extend({
  urlRoot: 'api/users',

  image: function (){
    if (!this._image){
      this._image = new Tryable.Models.Image();
    }
    return this._image;
  },

  parse: function (response) {
    if (response.image){
      this.image().set(response.image, { parse: true });
      delete response.image;
    }
    return response;
  }
});
