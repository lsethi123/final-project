Tryable.Views.ImageItem = Backbone.View.extend({
  template: JST['images/index_item'],
  events: {
    'click button' : "delete"
  },

  initialize: function (options){
    this.editable = options.editable
    this.listenTo(this.model, "sync", this.render);
  },

  render: function (){
    var content = this.template( {image: this.model, editable: this.editable });
    this.$el.html(content);
    return this;
  },

  delete: function (e){
    e.preventDefault();
    this.model.destroy();
  },

});
