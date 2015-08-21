Tryable.Views.TourUserItem = Backbone.View.extend({
  template: JST['tours/tour_user_item'],
  tagName: 'tr',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });

    this.$el.html(content);
    return this;
  }

});
