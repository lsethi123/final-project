Tryable.Routers.Router= Backbone.Router.extend({

  routes: {
    '' : 'index',
    'destinations/:id' : 'showDestination',
    'tours/new' : 'newTour',
    'tours/:id' :'showTour',
    'bookings' : 'showBookings'
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    window.places = this.collection = options.places;
    this.bookings = new Tryable.Collections.Bookings();
    this.bookings.fetch();
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
    var view = new Tryable.Views.TourShow({ model: model, collection: this.bookings });
    this._swapViews(view);
  },

  newTour: function (){
    this.collection.fetch();
    var model = new Tryable.Models.Tour();
    var images = new Tryable.Collections.Images();
    images.fetch();
    var view = new Tryable.Views.TourForm({ model: model, collection: images, places: this.collection });
    this._swapViews(view);
  },

  showBookings: function(id){
    var view = new Tryable.Views.BookingsShow({ collection: this.bookings });
    this._swapViews(view);
  },

  _swapViews: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }

});
