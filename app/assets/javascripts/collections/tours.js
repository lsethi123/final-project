Tryable.Collections.Tours = Backbone.Collection.extend({
  url: 'api/tours',
  model: Tryable.Models.Tour,

  getOrFetch: function(id){
    var model = this.get(id);
    if (!model){
      var that = this;
      model = new Tryable.Models.Tour({id: id});
      model.fetch({ success: function(){
        that.add(model);
      }});
    } else {
      model.fetch();
    }
    return model;
  }

});
