Tryable.Views.BookingForm = Backbone.View.extend({
  className: 'booking-form',
  tagName: 'form',
  template: JST['bookings/form'],

  events: {
    'click button.submit-booking' : 'submitBooking'
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });

    this.$el.html(content);
    $('.date-picker').datepicker({
    startDate: "Time.now",
    clearBtn: true,
    todayHighlight: true
    });
    return this;
  },

  submitBooking: function(e){
    e.preventDefault();
    var formData = this.$el.serializeJSON();
    var booking = new Tryable.Models.Booking(formData.booking);
    booking.set('tour_date', this.$('.date-picker').datepicker('getDate'));
    booking.save({}, {
      success: function (){
        booking.fetch();
        this.collection.add(booking);
        Backbone.history.navigate('#/bookings', { trigger: true });
      }.bind(this),
      error: function (response){
          console.log("Error callback called");
          window.location.replace('/session/new');
          // Backbone.history.navigate('session/new', {trigger: true} );
        }
     } );
  }

});
