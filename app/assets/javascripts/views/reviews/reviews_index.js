Tryable.Views.ReviewsIndex = Backbone.CompositeView.extend({
  template: JST['reviews/index'],
  events: {
    'click .new-review' : 'showForm',
    'click .submit-review' : 'submitReview'
  },

  initialize: function (){
    this.listenTo(this.collection, "sync", this.render);
    this.collection.each(this.addReviewView.bind(this));
    this.listenTo(this.collection, "add", this.addReviewView);
    this.listenTo(this.collection, 'remove', this.removeReviewView);
  },

  render: function (){
    var content = this.template({tour: this.model});
    this.$el.html(content);
    this.$('.new-rating').raty({
      path: '/assets/'
    });
    this.$('.average-rating').raty({
      path: '/assets/'
    });
    this.$('.average-rating').raty('score', this.model.escape('average_rating') );
    this.$('.average-rating').raty('readOnly', true);
    this.attachSubviews();
    return this;
  },

  addReviewView: function(review){
    var subview = new Tryable.Views.ReviewItem({ model: review });
    this.addSubview('.reviews', subview);
  },

  showForm: function(e){
    e.preventDefault();
    this.$('.new-review').css('display', 'none');
    this.$('.review-form').css('display', "block");
  },

  submitReview: function (e){
    e.preventDefault();
    var that = this;
    var formData = this.$('form').serializeJSON();
    var rating = this.$('.new-rating').raty('score');
    var review = new Tryable.Models.Review(formData.review);
    review.set('rating', rating);
    review.set('tour_id', this.model.escape('id'));

    review.save({}, {
      success: function(model, response){
        that.collection.add(review);
      },
      error: function(model, response){
        that.$('.form-errors').empty();
        that.$('.form-errors').addClass('alert alert-danger');
        response.responseJSON.forEach( function(error){
          var $li = $('<li></li>');
          $li.html(error);
          that.$('.form-errors').append($li);
        }) }});
    }

});
