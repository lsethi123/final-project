Tryable.Views.DestinationShow = Backbone.CompositeView.extend({
  className: 'col-md-10 col-md-offset-1',
  template: JST['destinations/show'],

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.collection, "sync", this.render );
    this.collection.each(this.addTourView.bind(this));
    this.listenTo(this.collection, "add", this.addTourView);
    this.listenTo(this.collection, 'remove', this.removeTourView);
  },

  render: function (){
    var content = this.template( {place: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addTourView: function(tour){
    var subview = new Tryable.Views.TourItem({ model: tour });
    this.addSubview('.tours', subview);
  },

  removeTourView: function(tour) {
    this.removeModelSubview('.tours', tour)
  }

});
