Tryable.Views.ReviewsIndex = Backbone.CompositeView.extend({

  template: JST['reviews/index'],

  events: {
    'click .submit-review' : 'submitReview'
  },

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
    this.$('.new-rating').raty({
      path: '/assets/'
    });
    this.attachSubviews();
    return this;
  },

  addReviewView: function(review){
    var subview = new Tryable.Views.ReviewItem({ model: review });
    this.addSubview('.reviews', subview);
  },

  submitReview: function (e){
    e.preventDefault();
    var formData = this.$('form').serializeJSON();
    var rating = this.$('.new-rating').raty('score');
    var review = new Tryable.Models.Review(formData.review);
    review.set('rating', rating);
    review.set('tour_id', this.model.escape('id'));
    review.save({}, { success: function(model, response){
      this.collection.add(review);
    }.bind(this) })

  }

});
