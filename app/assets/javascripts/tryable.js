window.Tryable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var places = new Tryable.Collections.Destinations();

    var router = new Tryable.Routers.Router({$rootEl: $('.root-div'), places: places});
    Backbone.history.start();

    var navView = new Tryable.Views.NavShow({router: router });
    $('.nav-show').html(navView.render().$el);
  }
};
