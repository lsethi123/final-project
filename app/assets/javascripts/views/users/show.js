Tryable.Views.UserShow = Backbone.View.extend({

  template: JST['users/show'],

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( { user: this.model });
    var profile = this.model.image();
    this.$el.html(content);
    // var avatar = $.cloudinary.image(profile_url, {width: 200, height: 200});
    var avatar = $.cloudinary.image('static/default_avatar.jpg', {width: 200, height: 200});
    this.$el.append(avatar);
    return this;
  }

});
