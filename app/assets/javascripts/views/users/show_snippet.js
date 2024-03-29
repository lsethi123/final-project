Tryable.Views.UserShow = Backbone.View.extend({
  template: JST['users/show'],
  className: 'row',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( { user: this.model });
    this.$el.html(content);
    return this;
  }

});
