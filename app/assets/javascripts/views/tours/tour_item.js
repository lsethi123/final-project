Tryable.Views.TourItem = Backbone.View.extend({

  template: JST['tours/tour_item'],
  className: 'tour-item',

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });
    var img;
    if (this.model.images().length >0 ){
      img_first = this.model.images().models[0];
      img = $.cloudinary.image( img_first.escape('url'), {width: 200, height: 200, crop: 'fill' } );
    }
    this.$el.html(content);
    this.$el.find('.thumbnail').html(img);
    return this;
  }

});
