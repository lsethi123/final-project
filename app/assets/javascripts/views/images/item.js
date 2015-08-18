Tryable.Views.ImageItem = Backbone.View.extend({
  template: JST['images/index_item'],
  tagName: 'button',
  className: 'modal-img',
  events: {
    'click button.modal-img' : 'openSlide',
    'click button.delete-button' : "delete",
  },

  initialize: function (options){
    this.w = options.width;
    this.h = options.height;
    this.hasModal = options.hasModal;
    this.listenTo(this.model, "sync", this.render);
    this.editable = options.editable;
  },

  openSlide: function(e){
    debugger;
    e.preventDefault();
    modal = new Tryable.Views.ImageSlide({ model: this.model });
    $('body').append(modal.$el);
    modal.render();
  },

  render: function (){
    // this.$el.attr('href', "");
    var content = this.template( {image: this.model, editable: this.editable, modal: this.hasModal });
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
