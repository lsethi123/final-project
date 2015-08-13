Tryable.Collections.Images = Backbone.Collection.extend({
  url: 'api/images',
  model: Tryable.Models.Image,

  getOrFetch: function(id){
    var model = this.get(id);
    if (!model){
      var that = this;
      model = new Tryable.Models.Image({id: id});
      model.fetch({ success: function(){
        that.add(model);
      }});
    } else {
      model.fetch();
    }
    return model;
  }

});
