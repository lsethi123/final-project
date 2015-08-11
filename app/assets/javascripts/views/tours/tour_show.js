Tryable.Views.TourShow = Backbone.View.extend({

  template: JST['tours/show'],

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });
    this.$el.html(content);
    return this;
  }

});
