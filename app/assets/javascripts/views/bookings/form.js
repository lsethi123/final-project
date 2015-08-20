Tryable.Views.BookingForm = Backbone.View.extend({
  className: 'booking-form',
  tagName: 'form',
  template: JST['bookings/form'],

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var times = [8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
    var content = this.template( {tour: this.model, times: times});
    this.$el.html(content);
    $('.date-picker').datepicker({
    startDate: "Time.now",
    clearBtn: true,
    todayHighlight: true
    });
    var today = new Date();
    $('.date-picker').datepicker('setUTCDate', today);

    return this;
  },

});
