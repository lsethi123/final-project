Tryable.Collections.Bookings = Backbone.Collection.extend({
  url: 'api/bookings',
  model: Tryable.Models.Booking,

  getOrFetch: function(id){
    var model = this.get(id);
    if (!model){
      var that = this;
      model = new Tryable.Models.Booking({id: id});
      model.fetch({ success: function(){
        that.add(model);
      }});
    } else {
      model.fetch();
    }
    return model;
  }

});
