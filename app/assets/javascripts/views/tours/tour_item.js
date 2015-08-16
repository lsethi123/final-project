Tryable.Views.TourItem = Backbone.View.extend({

  template: JST['tours/tour_item'],
  className: 'tour-item',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });
    var img;
    if (this.model.images() ){
      img_first = this.model.images().models[0];
      img = $.cloudinary.image(img_first.escape('url'), {width: 200, height: 200, crop: 'fill' });
      img.addClass('tour-img');
    }
    this.$el.html(content);
    this.$el.prepend(img);
    return this;
  }

});
