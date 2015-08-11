Tryable.Views.DestinationsIndex = Backbone.CompositeView.extend({

  template: JST['destinations/index'],
  events: {
    'input .search-box' : 'handleInput'
  },

  initialize: function (){
    this.subview = new Tryable.Views.SearchResults({collection: this.collection});
  },

  render: function (){
    var content = this.template();
    this.$el.html(content);
    this.$el.append(this.subview.render().$el)
    return this;
  },

  handleInput: function(e){
    var query = $(e.currentTarget).val();
    this.collection.fetch({
      data: { query: query }
    });
  }

});
