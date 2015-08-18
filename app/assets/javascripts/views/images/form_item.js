Tryable.Views.FormImageItem = Backbone.View.extend({
  template: JST['images/index_item'],
  events: {
  'click button.delete-button' : 'delete'
  },

  initialize: function (options){
    this.cloudinary_options = options.cloudinary_options
    this.listenTo(this.model, "sync", this.render);
  },

  render: function (){
    var content = this.template( {image: this.model});
    var img = $.cloudinary.image(this.model.escape('url'), this.cloudinary_options);
    this.$el.html(content);
    this.$el.prepend(img);
    return this;
  },

  delete: function (e){
    e.preventDefault();
    this.model.destroy();
  },

});
