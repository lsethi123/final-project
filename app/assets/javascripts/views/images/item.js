Tryable.Views.ImageItem = Backbone.View.extend({
  template: JST['images/index_item'],
  events: {
    'click button' : "delete"
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function (){
    var content = this.template( {image: this.model });
    this.$el.html(content);
    return this;
  },

  delete: function (e){
    e.preventDefault();
    this.model.destroy();
  },

});
