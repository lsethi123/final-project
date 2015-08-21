Tryable.Views.BookingsIndex = Backbone.CompositeView.extend({
  className: 'bookings-show-view row',
  template: JST['bookings/index'],

  initialize: function (){
    // this.collection = this.collection.where({status: "confirmed"});
    this.listenTo(this.collection, "sync", this.render );
    this.collection.each(this.addItemView.bind(this));
    this.listenTo(this.collection, "add", this.addItemView);
    this.listenTo(this.collection, "remove", this.removeItemView);
  },

  render: function (){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addItemView: function(bking){
    var subview = new Tryable.Views.BookingsIndexItem({ model: bking });
    this.addSubview('.bookings-index-items', subview);
  },

  removeItemView: function(booking) {
    this.removeModelSubview('.bookings-index-items', booking);
  }

});
