window.Tryable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var currentUser;

    if (Tryable.CURRENT_USER !== undefined){
      currentUser = new Tryable.Models.User({id: Tryable.CURRENT_USER.id});
      currentUser.fetch();
    } else {
      currentUser = new Tryable.Models.User();
    }

    var places = new Tryable.Collections.Destinations();

    var navView = new Tryable.Views.NavShow({ model: currentUser });
    $('.nav-show').html(navView.render().$el);

    var router = new Tryable.Routers.Router({
      $rootEl: $('.root-div'),
      places: places,
      currentUser: currentUser });
    Backbone.history.start();

  }
};
