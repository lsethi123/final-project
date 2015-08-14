Tryable.Models.Destination = Backbone.Model.extend({
  urlRoot: 'api/destinations',

  tours: function (){
    if (!this._tours){
      this._tours = new Tryable.Collections.Tours();
    }
    return this._tours;
  },

  parse: function (response) {
    if (response.tours){
      this.tours().set(response.tours, { parse: true });
      response.tours.remove;
    }
    return response;
  }
});
