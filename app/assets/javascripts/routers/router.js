Tryable.Routers.Router= Backbone.Router.extend({

  routes: {
    '' : 'index',
    'destinations/:id' : 'showDestination',
    'tours/new' : 'newTour',
    'tours/:id/photos' : 'addPhotos',
    'tours/:id' :'showTour',
    'bookings' : 'showBookings',
    'users/:id' : 'showUser'
  },

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.current_user = options.current_user;
    this.collection = options.places;
    this.booking = new Tryable.Models.Booking();
    this.bookings = new Tryable.Collections.Bookings();
    this.bookings.fetch();
  },

  showUser: function(id){
    var user = new Tryable.Models.User({id: id});
    user.fetch();
    var view = new Tryable.Views.UserProfile({ model: user });
    this._swapViews(view);
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

  newTour: function (){
    this.collection.fetch();
    var view = new Tryable.Views.TourForm({ places: this.collection }); //
    this._swapViews(view);
  },

  addPhotos: function(id){
    var model = new Tryable.Models.Tour({id: id});
    model.fetch();
    var view = new Tryable.Views.ImageUploader({ model: model });
    this._swapViews(view);
  },

  showTour: function (id){
    var model = new Tryable.Models.Tour({id: id});
    model.fetch();
    var view = new Tryable.Views.TourShow({ model: model,
      booking: this.booking,
      collection: this.bookings,
      current_user:this.current_user });
    this._swapViews(view);
  },

  showBookings: function(id){
    this.bookings.fetch();
    var view = new Tryable.Views.BookingsIndex({ collection: this.bookings });
    this._swapViews(view);
  },

  _swapViews: function (view){
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }

});
