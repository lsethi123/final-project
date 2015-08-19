Tryable.Views.ImageModal = Backbone.View.extend({
  template: JST['images/slide'],

  events: {
    'click .m-background': 'removeModal',
    'click .close': 'removeBtn'
  },

  initialize: function (options) {
    this.first = options.first
    $(document).on('keyup', this.handleKey.bind(this));
    $('body').addClass('stop-scrolling');
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      $('body').removeClass('stop-scrolling');
      this.remove();
    }
  },

  removeModal: function(){
    $('body').removeClass('stop-scrolling');
    this.remove();
  },

  removeBtn: function (event) {
    event.preventDefault();
    $('body').removeClass('stop-scrolling');
    this.remove();
  },

  render: function () {
    this.$el.html(this.template());
    this.onRender();
    var y = window.pageYOffset;
    console.log(y);
    this.$('.m-background').css('top', y+'px');
    this.$('.m-content').css('top', y+40+'px');
    return this;
  },

  onRender: function(){
    this.collection.each( function (image) {
      var newSlide = $('<div></div>').addClass('item');
      if (this.model.get('url') === image.get('url')) {
        newSlide.addClass('active');
      }
      var image = $.cloudinary.image(image.escape('url'), {width: 1000, height: 600, crop: 'fill'});
      newSlide.append(image);
      this.$('.carousel-inner').append(newSlide);
    }.bind(this));
  }

});
