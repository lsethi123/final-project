Tryable.Views.TourImage = Backbone.View.extend({
  template: JST['images/tour_image'],
  events: {
  'click a' : 'openModal'
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },

  openModal: function(e){
    e.preventDefault();
    modal = new Tryable.Views.ImageModal({ model: this.model });
    $('body').append(modal.$el);
    modal.render();
  },

  render: function (){
    var content = this.template( {image: this.model});
    var img = $.cloudinary.image(this.model.escape('url'), {width: 300, height: 200, crop: 'fill'});
    this.$el.html(content);
    this.$('.clickable-img').html(img);
    return this;
  },

  delete: function (e){
    e.preventDefault();
    this.model.destroy();
  },

});
