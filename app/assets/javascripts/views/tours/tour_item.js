Tryable.Views.TourItem = Backbone.View.extend({

  template: JST['tours/tour_item'],
  className: 'tour-item',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });
    if (this.model.escape('url')){
      var img = $.cloudinary.image(this.model.escape('url'), {width: 200, height: 200, crop: 'fill' });
      img.addClass('tour-img');
    }
    this.$el.html(content);
    this.$el.prepend(img);
    return this;
  }

});
