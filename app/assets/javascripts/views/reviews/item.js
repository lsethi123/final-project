Tryable.Views.ReviewItem = Backbone.View.extend({

  template: JST['reviews/item'],

  initialize: function (){
    this.listenTo(this.model, "sync", this.render);
  },

  render: function (){
    var content = this.template( {review: this.model });
    this.$el.html(content);
    this.$('.stars').raty({
      path: '/assets/'
    });
    this.$('.stars').raty('score', this.model.escape('rating'));
    this.$('.stars').raty('readOnly', true);
    return this;
  }

});
