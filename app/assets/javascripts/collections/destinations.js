Tryable.Collections.Destinations = Backbone.Collection.extend({
  url: 'api/destinations',
  model: Tryable.Models.Destination,

  getOrFetch: function(id){
    var model = this.get(id);
    if (!model){
      var that = this;
      model = new Tryable.Models.Destination({id: id});
      model.fetch({ success: function(){
        that.add(model);
      }});
    } else {
      model.fetch();
    }
    return model;
  }

});
