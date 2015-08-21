Tryable.Views.NavShow = Backbone.CompositeView.extend({
  className: 'nav-container',
  template: JST['nav_show'],
  events: {
    'click .login-link' : 'loginPrompt'
    // 'input .search-box' : 'handleInput',
    // 'click .search-name' : 'hideResults'
  },

  initialize: function (options){
    this.router = options.router;
    this.listenTo(this.model, "sync", this.render); // The Loggedin user
    this.addSignUpView();
    // this.addSearchView();
    // this.collection.fetch();
    // this.listenTo(this.model, "sync", this.render );
  },

  loginPrompt: function(){

  },

  render: function (){
    var content = this.template({currentUser: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addSignUpView: function(){
    var subview = new Tryable.Views.NewUser({ current_user: this.model });
    this.addSubview('.modal-container', subview);
  }

  // addSearchView: function (){
  //   var subview = new Tryable.Views.SearchResults({collection: this.collection});
  //   this.addSubview('.search-results', subview);
  // },
  //
  // handleInput: function(e){
  //   var query = $(e.currentTarget).val();
  //   this.collection.fetch({
  //     data: { query: query }
  //   });
  // },

  // hideResults: function() {
  //   this.$el.find('input').val("");
  //   this.$el.find('.search-results').empty();
  // }

});
