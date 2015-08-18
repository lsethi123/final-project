Tryable.Views.ImageModal = Backbone.View.extend({
  template: JST['images/slide'],

  events: {
    'click .m-background': 'remove',
    'click .close': 'removeBtn'
  },

  initialize: function (options) {
    this.first = options.first
    $(document).on('keyup', this.handleKey.bind(this));
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  removeBtn: function (event) {
    event.preventDefault();
    this.remove();
  },

  render: function () {
    this.$el.html(this.template());
    this.collection.each( function (image) {
      var newSlide = $('<div></div>').addClass('item');
      if (this.model.get('url') === image.get('url')) {
        newSlide.addClass('active');
      }
      var image = $.cloudinary.image(image.escape('url'), {width: 1000, height: 600, crop: 'fill'});
      newSlide.append(image);
      $('.carousel-inner').append(newSlide);
    }.bind(this));
    return this;
  },

});
