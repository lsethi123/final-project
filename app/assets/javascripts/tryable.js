window.Tryable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var current_user;

    if (Tryable.CURRENT_USER !== undefined){
      current_user = new Tryable.Models.User({id: Tryable.CURRENT_USER.id});
      current_user.fetch();
    } else {
      current_user = new Tryable.Models.User();
    }

    var places = new Tryable.Collections.Destinations();

    var navView = new Tryable.Views.NavShow({ model: current_user });
    $('.nav-show').html(navView.render().$el);

    var router = new Tryable.Routers.Router({
      $rootEl: $('.root-div'),
      places: places,
      current_user: current_user });
    Backbone.history.start();

  }
};
