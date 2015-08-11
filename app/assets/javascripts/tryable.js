window.Tryable = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Tryable.Routers.Router({$rootEl: $('.container')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Tryable.initialize();
});
