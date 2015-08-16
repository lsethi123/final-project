Tryable.Views.ImageItem = Backbone.View.extend({
  template: JST['images/index_item'],
  events: {
    'click button' : "delete"
  },

  initialize: function (options){
    this.w = options.width;
    this.h = options.height;
    this.listenTo(this.model, "sync", this.render);
    this.editable = options.editable;
  },

  render: function (){
    var content = this.template( {image: this.model, editable: this.editable });
    var img = $.cloudinary.image(this.model.escape('url'), {width: this.w, height: this.h, crop: 'fill' });
    this.$el.html(content);
    this.$el.prepend(img);
    return this;
  },

  delete: function (e){
    e.preventDefault();
    this.model.destroy();
  },

});
