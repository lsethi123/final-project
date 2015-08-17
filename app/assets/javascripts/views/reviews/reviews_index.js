Tryable.Views.ReviewsIndex = Backbone.CompositeView.extend({

  template: JST['reviews/index'],

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render);
    this.collection.each(this.addReviewView.bind(this));
    this.listenTo(this.collection, "add", this.addReviewView);
    this.listenTo(this.collection, 'remove', this.removeReviewView);
  },

  render: function (){
    // debugger;
    var content = this.template();
    this.$el.html(content);
    // this.$el.find('.stars').raty({
    //   path: '/assets/',
    //   readOnly: truea
    // });
    this.attachSubviews();
    return this;
  },

  addReviewView: function(review){
    var subview = new Tryable.Views.ReviewItem({ model: review });
    this.addSubview('.reviews', subview);
  },

});
