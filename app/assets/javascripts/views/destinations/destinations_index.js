Tryable.Views.DestinationsIndex = Backbone.CompositeView.extend({

  template: JST['destinations/index'],
  events: {
    'input .search-box' : 'handleInput',
    'click .search-name' : 'hideResults'
  },

  initialize: function (){
    this.addSearchView();
    this.collection.fetch();
  },

  render: function (){
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addSearchView: function (){
    var subview = new Tryable.Views.SearchResults({collection: this.collection});
    this.addSubview('.search-results', subview);
  },

  handleInput: function(e){
    var query = $(e.currentTarget).val();
    this.collection.fetch({
      data: { query: query }
    });
  },

  hideResults: function() {
    this.$('.input').empty();
  }

});
