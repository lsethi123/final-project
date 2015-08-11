Tryable.Routers.Router= Backbone.Router.extend({

  routes: {
    '' : 'index',
    'destinations/:id' : 'showDestination',
    'tours/:id' :'showTour'
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = new Tryable.Collections.Destinations();
    this.collection.fetch();
  },

  index: function() {
    this.collection.fetch();
    var view = new Tryable.Views.DestinationsIndex({ collection: this.collection });
    this._swapViews(view);
  },

  showDestination: function (id){
    var model = this.collection.getOrFetch(id);
    var tours = model.tours();
    var view = new Tryable.Views.DestinationShow({ model: model, collection: tours});
    this._swapViews(view);
  },

  showTour: function (id){
    var model = new Tryable.Models.Tour({id: id});
    model.fetch();
    var view = new Tryable.Views.TourShow({ model: model });
    this._swapViews(view);
  },

  _swapViews: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }

});
