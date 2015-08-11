Tryable.Views.DestinationShow = Backbone.View.extend({

  template: JST['destinations/show'],

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.collection, "sync", this.render );
  },

  render: function (){
    var content = this.template( {place: this.model, tours: this.collection });
    this.$el.html(content);
    return this;
  }

});
