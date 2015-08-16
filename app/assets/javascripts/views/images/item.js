Tryable.Views.ImageItem = Backbone.View.extend({
  template: JST['images/index_item'],
  events: {
    'click button' : "delete"
  },

  initialize: function (options){
    this.listenTo(this.model, "sync", this.render);
    this.editable = options.editable;
  },

  render: function (){
    var content = this.template( {image: this.model, editable: this.editable });
    var img = $.cloudinary.image(this.model.escape('url'), {width: 1200, height: 600, crop: 'fill' });
    img.addClass('tour-show-img');
    this.$el.html(content);
    this.$el.prepend(img);
    return this;
  },

  delete: function (e){
    e.preventDefault();
    this.model.destroy();
  },

});
