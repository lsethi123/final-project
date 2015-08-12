Tryable.Views.SearchResults = Backbone.View.extend({

  template: JST['destinations/search_results'],

  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function (){
    var content = this.template( {places: this.collection } );
    this.$el.html(content);
    return this;
  }

});
