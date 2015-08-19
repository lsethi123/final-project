Tryable.Views.BookingConfirmation = Backbone.View.extend({
  template: JST['bookings/confirmation'],
  className: 'container',

  events: {
    'click button': 'processBooking'
  },

  initialize: function (options){
    this.current_user = options.current_user;
    this.tour = options.tour;
    this.listenTo(this.tour, "sync", this.render );
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function (){
    var content = this.template( {booking: this.model, tour: this.tour});
    this.$el.html(content);
    var img_url = this.tour.images().at(0).escape('url');
    var thumb = $.cloudinary.image(img_url, { width: 300, height: 200, crop: 'fill'});
    this.$('.order-thumbnail').html(thumb);
    return this;
  },

  processBooking: function(e){
    if (Tryable.CURRENT_USER === undefined){
      this.createUser(e);
    } else {
      this.submitBooking(e);
    }
  },

  createUser: function(e){
    e.preventDefault();
    var userData = this.$('form').serializeJSON();
    this.current_user.set(userData);
    // var user = new Tryable.Models.User(userData);
    this.current_user.save({}, {
      success: function(user, response){
        Tryable.CURRENT_USER = {
          username: response.username,
          id: response.id,
          name: response.name
        };

        this.submitBooking(e);
      }.bind(this),

      error: function(response){
        debugger;
      }
    });
  },

  submitBooking: function(e){
    e.preventDefault();
    this.model.save({}, {
      success: function (booking, response){
        booking.fetch();
        this.collection.add(booking);
        Backbone.history.navigate('bookings', { trigger: true });
      }.bind(this),
      error: function (response){
          console.log("Error callback called");
          Backbone.history.navigate('', {trigger: true});
        }
     } );
  }

});
