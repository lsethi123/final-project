Tryable.Views.TourShow = Backbone.CompositeView.extend({

  template: JST['tours/show'],

  events: {
    'click button.submit-booking' : 'submitBooking'
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
    this.addBookingView();
  },

  render: function (){
    var content = this.template( {tour: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addBookingView: function(){
    var subview = new Tryable.Views.BookingForm({ model: this.model });
    this.addSubview('.booking-form', subview);
  },

  submitBooking: function(e){
    e.preventDefault();
    var formData = this.$el.find('form').serializeJSON();
    var booking = new Tryable.Models.Booking(formData.booking);
    debugger;
    booking.save({},
      { success: function (){
        Backbone.history.navigate('#/bookings');
      }.bind(this),
        error: function (response){
          debugger;
        }
     } );
  }

});
