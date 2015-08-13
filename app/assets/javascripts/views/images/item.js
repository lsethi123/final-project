Tryable.Views.ImageItem = Backbone.View.extend({

  template: JST['images/index_item'],

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function (){
    var content = this.template( {image: this.model });
    this.$el.html(content);
    return this;
  },


});
