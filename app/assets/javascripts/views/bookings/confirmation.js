Tryable.Views.BookingConfirmation = Backbone.View.extend({
  template: JST['bookings/confirmation'],
  className: 'container',
  events: {
    'click button': 'processBooking'
  },

  initialize: function (options){
    this.currentUser = options.currentUser;
    this.tour = options.tour;
    this.listenTo(this.tour, "sync", this.render );
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function (){
    var numPeople = parseInt(this.model.escape('num_people'));
    var price = parseInt(this.tour.escape('price'));
    var totalPrice = numPeople * price;

    var content = this.template( {booking: this.model, tour: this.tour, totalPrice: totalPrice});
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
    var that = this;
    var userData = this.$('form').serializeJSON();
    this.currentUser.set(userData);
    this.currentUser.save({}, {
      success: function(user, response){
        Tryable.CURRENT_USER = {
          username: response.username,
          id: response.id,
          name: response.name
        };

        this.submitBooking(e);
      }.bind(this),
      error: function(user, response){
        that.$('.form-errors').empty();
        that.$('.form-errors').addClass('alert alert-danger');
        response.responseJSON.forEach( function(error){
          var $li = $('<li></li>');
          $li.html(error);
          that.$('.form-errors').append($li);
        });
      }
    });
  },

  submitBooking: function(e){
    e.preventDefault();
    var that = this;
    this.model.save({}, {
      success: function (booking, response){
        booking.fetch();
        that.collection.add(booking);
        Backbone.history.navigate('bookings', { trigger: true });
      },
      error: function (response){
          Backbone.history.navigate('', {trigger: true});
        }
     } );
  }

});
