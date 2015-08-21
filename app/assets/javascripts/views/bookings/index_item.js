Tryable.Views.BookingsIndexItem = Backbone.View.extend({
  className: 'bookings-index-item',
  template: JST['bookings/index_item'],
  tagName: 'tr',

  events: {
    'click .cancel-btn' : 'cancel'
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {booking: this.model});
    this.$el.html(content);
    // var url = this.model.tour().attributes.images[0].url; //ASK-TA - parse not working
    // var img = $.cloudinary.image(url, { width: 100, height: 100, crop: 'fill' });
    // this.$('.img-thumb').html(img);
    return this;
  },

  cancel: function(e){
    e.preventDefault();
    var r = confirm('Cancel this tour?');
    if (r) {
      this.model.set("status", "cancelled");
      this.model.save({}, {
        success: function (){

        },
        error: function(response){
        }
      });
    }

  }

});
