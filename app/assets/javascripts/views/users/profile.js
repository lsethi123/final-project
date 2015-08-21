Tryable.Views.UserProfile = Backbone.CompositeView.extend({
  template: JST['users/profile'],
  className: 'row',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.model, "sync", this.addAboutView );
    this.listenTo(this.model, "sync", this.addTourViews );
  },

  render: function (){
    var content = this.template( { user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addAboutView: function(){
    var subview = new Tryable.Views.UserShow({ model: this.model });
    this.addSubview('.about', subview);
  },

  addTourViews: function(){
    this.model.tours().each(this.addTourView.bind(this));
  },

  addTourView: function(tour){
    var subview = new Tryable.Views.TourUserItem({ model: tour });
    this.addSubview('.user-tours', subview);
  }
});
