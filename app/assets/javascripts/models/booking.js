Tryable.Models.Booking = Backbone.Model.extend({
  urlRoot: 'api/bookings',

  tour: function (){
    if (!this._tour){
      this._tour = new Tryable.Models.Tour();
    }
    return this._tour;
  },

  parse: function (response) {
    if (response.tour){
      this.tour().set(response.tour, { parse: true });
      delete response.tour;
    }
    return response;
  }

});
