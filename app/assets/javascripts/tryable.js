window.Tryable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var places = new Tryable.Collections.Destinations();
    places.fetch();

    var router = new Tryable.Routers.Router({$rootEl: $('.container'), places: places});
    Backbone.history.start();

    var navView = new Tryable.Views.NavShow({router: router });
    $('.nav-show').html(navView.render().$el);
  }
};

$(document).ready(function(){
  Tryable.initialize();
});
