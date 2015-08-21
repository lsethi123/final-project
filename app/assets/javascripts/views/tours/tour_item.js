Tryable.Views.TourItem = Backbone.View.extend({

  template: JST['tours/tour_item'],
  className: 'tour-item',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });
    var img;
    if (this.model.images().length > 0 ){
      var imgFirst = this.model.images().models[0];
      img = $.cloudinary.image( imgFirst.escape('url'), {width: 250, height: 200, crop: 'fill' } );;
      img.addClass('grow');
    }

    this.$el.html(content);
    // this.renderRating();
    this.$el.find('.thumbnail').html(img);
    return this;
  },

  // renderRating: function(){
  //   this.$('.average-rating').raty('score', this.model.escape('average_rating'));
  //   this.$('.average-rating').raty('readOnly', true);
  // }

});
