Tryable.Views.MyBookings = Backbone.CompositeView.extend({
  template: JST['bookings/my_reservations'],

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render );
    this.listenTo(this.collection, "add sync", this.addItemView );
    // this.listenTo(this.collection, "add sync", this.addSubsetsViews );
  },

  render: function (){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addItemView: function(bking){
    var subview = new Tryable.Views.BookingsIndex({ collection: this.collection, isAdmin: false });
    this.addSubview('.bookings-index', subview);
  },

  addSubsetsViews: function(){
    var statuses = ['requested', 'confirmed', 'denied', 'cancelled'];
    statuses.forEach( function (s) {
      var subset = new Tryable.Collections.Bookings(this.collection.where({status: s}));
      var subview = new Tryable.Views.BookingsIndex({ collection: subset, isAdmin: false });
      this.addSubview('.bookings-'+status, subview);
    }.bind(this));
    // var subsetBookings = new Tryable.Collections.Bookings();
    // subsetBookings.url = '/api/bookings/'+ type;
    // subsetBookings.fetch();

  }

});
