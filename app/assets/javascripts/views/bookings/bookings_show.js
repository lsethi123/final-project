Tryable.Views.BookingsShow = Backbone.CompositeView.extend({
  className: 'bookings-show-view',
  template: JST['bookings/index'],

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render );
    this.collection.each(this.addItemView.bind(this));
    this.listenTo(this.collection, "add", this.addItemView);
  },

  render: function (){
    var content = this.template( {bookings: this.collection});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addItemView: function(booking){
    var subview = new Tryable.Views.BookingsIndexItem({ model: booking });
    this.addSubview('.bookings-index-items', subview);
  }

});
