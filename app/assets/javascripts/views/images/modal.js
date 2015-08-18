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
    return this;
  },

});
