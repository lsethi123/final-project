Tryable.Views.BookingsAdmin = Backbone.CompositeView.extend({
  template: JST['bookings/admin'],

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render );
    this.listenTo(this.collection, "sync", this.addItemView );
  },

  render: function (){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addItemView: function(bking){
    var subview = new Tryable.Views.BookingsIndex({ collection: this.collection, isAdmin: true });
    this.addSubview('.bookings-index', subview);
  },

});
