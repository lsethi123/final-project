Tryable.Views.DestinationsIndex = Backbone.View.extend({

  template: JST['destinations/index'],

  events: {
    'input .search-box' : 'updateResults'
  },

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render );
  },

  render: function (){
    var content = this.template( {places: this.collection } );
    this.$el.html(content);
    return this;
  },

  updateResults: function(e){
    // var searchString = $(e.currentTarget).val();
    // this.collection = _.where(this.collection, {name})
  }

});
