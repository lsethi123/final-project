Tryable.Views.ImageModal = Backbone.View.extend({
  template: JST['images/slide'],

  events: {
    'click .m-background': 'remove',
    'click .close': 'removeBtn'
  },

  initialize: function () {
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
    var first = true;
    this.collection.each( function (image) {
      var newSlide = $('<div></div>').addClass('item');
      if (first) {
        newSlide.addClass('active');
        first = false;
      }
      var image = $.cloudinary.image(image.escape('url'), {width: 1000, height: 600, crop: 'fill'});
      newSlide.append(image);
      $('.carousel-inner').append(newSlide);
    });
    return this;
  },

});
