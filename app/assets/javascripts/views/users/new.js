Tryable.Views.NewUser = Backbone.View.extend({
  template: JST['users/new'],
  events: {
    'click .new-user': 'createUser'
  },

  initialize: function (options){
    this.currentUser = options.currentUser;
    this.listenTo(this.model, "sync", this.render );
    this.listenTo(this.model, "save", this.render );
  },

  render: function (){
    var content = this.template({user: this.currentUser});
    this.$el.html(content);
    return this;
  },

  createUser: function(e){
    var that = this;
    var userData = this.$('form').serializeJSON();
    this.currentUser.set(userData);
    this.currentUser.save({}, {
      success: function(user, response){
        Tryable.CURRENT_USER = {
          username: response.username,
          id: response.id,
          name: response.name
        };
        this.$('#signUpModal').modal('hide');
        $('.modal').addClass('hide');
      }.bind(this),
      error: function(user, response){
        that.$('.form-errors').empty();
        that.$('.form-errors').addClass('alert alert-danger');
        response.responseJSON.forEach( function(error){
          var $li = $('<li></li>');
          $li.html(error);
          that.$('.form-errors').append($li);
        });
      }
    });
  }

});
