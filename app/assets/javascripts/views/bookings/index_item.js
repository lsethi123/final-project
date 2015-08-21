Tryable.Views.BookingsIndexItem = Backbone.View.extend({
  className: 'bookings-index-item',
  template: JST['bookings/index_item'],
  tagName: 'tr',

  events: {
    'click .cancel-btn' : 'cancel',
    'click .approve-btn' : 'approve',
    'click .deny-btn' : 'deny'
  },

  initialize: function (options){
    this.isAdmin = options.isAdmin;
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.model, "sync", this.onSync );
  },

  render: function (){
    var content = this.template( {booking: this.model, isAdmin: this.isAdmin });
    this.$el.html(content);
    var url = this.model.escape('booking_url');
    // var url = this.model.tour().images[0].url; //ASK-TA - parse not working
    // var url = this.model.tour().attributes.images[0].url; //ASK-TA - parse not working
    var img = $.cloudinary.image(url, { width: 100, height: 100, crop: 'fill' });
    this.$('.img-thumb').html(img);
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
  },

  approve: function(e){
    e.preventDefault();
    var r = confirm('Approve the tour?');
    if (r) {
      this.model.set("status", "approved");
      this.model.save({}, {
        success: function (){
        },
        error: function(response){
        }
      });
    }
  },

  deny: function(e){
    e.preventDefault();
    var r = confirm('Approve the tour?');
    if (r) {
      this.model.set("status", "approved");
      this.model.save({}, {
        success: function (){
        },
        error: function(response){
        }
      });
    }
  }


});
