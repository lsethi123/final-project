Tryable.Views.BookingsIndexItem = Backbone.View.extend({
  className: 'bookings-index-item',
  template: JST['bookings/index_item'],
  tagName: 'tr',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {booking: this.model});
    this.$el.html(content);
    return this;
  }

});
