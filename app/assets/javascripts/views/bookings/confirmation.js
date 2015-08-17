Tryable.Views.BookingConfirmation = Backbone.View.extend({
  template: JST['bookings/confirmation'],
  className: 'container',

  events: {
    'click button': 'submitBooking'
  },

  initialize: function (options){
    this.tour = options.tour;
    this.listenTo(this.tour, "sync", this.render );
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {booking: this.model, tour: this.tour});
    this.$el.html(content);
    return this;
  },

  submitBooking: function(e){
    e.preventDefault();
    this.model.save({}, {
      success: function (booking, response){
        booking.fetch();
        this.collection.add(booking);
        Backbone.history.navigate('#/bookings', { trigger: true });
      }.bind(this),
      error: function (response){
          console.log("Error callback called");
          Backbone.history.navigate('#', {trigger: true});
        }
     } );
  }

});
