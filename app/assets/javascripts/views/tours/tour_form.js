Tryable.Views.TourForm = Backbone.CompositeView.extend({
  template: JST['tours/form'],
  className: 'row',
  events: {
    "click .submit-booking" : 'submit',
  },

  initialize: function (options){
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
    var formData = this.$el.find('form').serializeJSON();
    var model = new Tryable.Models.Tour(formData.tour);
    model.save( {}, {
      success: function (model, response ){
          Backbone.history.navigate('tours/' + response.id + '/photos', { trigger: true });
      },
      error: function (response){
          console.log("Error callback called");
      }
    });
  }

});
