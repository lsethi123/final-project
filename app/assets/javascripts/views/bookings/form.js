Tryable.Views.BookingForm = Backbone.View.extend({
  className: 'booking-form',
  tagName: 'form',
  template: JST['bookings/form'],

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

});
