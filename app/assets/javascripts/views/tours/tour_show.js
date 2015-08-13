Tryable.Views.TourShow = Backbone.CompositeView.extend({

  template: JST['tours/show'],

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
    var subview = new Tryable.Views.BookingForm({ model: this.model, collection: this.collection });
    this.addSubview('.booking-form', subview);
  },

});
