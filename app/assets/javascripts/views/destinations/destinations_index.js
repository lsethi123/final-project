Tryable.Views.DestinationsIndex = Backbone.CompositeView.extend({

  template: JST['destinations/index'],
  events: {
    'click button' : 'search'
  },

  initialize: function (){
    this.collection.fetch();
    this.listenTo( this.collection, "sync", this.addAutocomplete );
  },

  render: function (){
    var content = this.template({places: this.collection});
    this.$el.html(content);
    return this;
  },

  addAutocomplete: function(){
    $("#search-places").autocomplete({
      source: this.collection.pluck('name'),
        close: function(event, ui){
          this.search(event);
        }.bind(this)
    });

    $('#search-places').focus();
  },

  search: function(e){
    var placeName = this.$el.find('#search-places').val()
    var place = this.collection.findWhere({name: placeName });
    if (place !== undefined){
      Backbone.history.navigate('destinations/'+ place.escape('id'), {trigger: true} );
    }
  }

});
