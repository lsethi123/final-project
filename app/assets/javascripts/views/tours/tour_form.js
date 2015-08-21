Tryable.Views.TourForm = Backbone.CompositeView.extend({
  template: JST['tours/form'],
  className: 'row',
  events: {
    "click .submit-booking" : 'submit',
  },

  initialize: function (options){
    this.currentUser = options.currentUser;
    this.places = options.places;
    this.listenTo(this.places, "sync", this.render);
  },

  render: function (){
    var content = this.template( {tour: this.model, places: this.places });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  submit: function(e){
    e.preventDefault();
    var that = this;
    var formData = this.$el.find('form').serializeJSON();
    var model = new Tryable.Models.Tour(formData.tour);
    model.save( {}, {
      success: function (model, response ){
          Backbone.history.navigate('tours/' + response.id + '/photos', { trigger: true });
          that.currentUser.fetch(); // Make navbar refresh to show customer bookings
      },
      error: function (model, response){
        that.$('.form-errors').empty();
        that.$('.form-errors').addClass('alert alert-danger')
        response.responseJSON.forEach( function(error){
          var $li = $('<li></li>');
          $li.html(error);
          that.$('.form-errors').append($li);
        })
      }
    });
  }

});
