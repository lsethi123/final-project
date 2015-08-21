Tryable.Views.TourUserItem = Backbone.View.extend({
  template: JST['tours/tour_user_item'],
  tagName: 'tr',

  events: {
    'click button' : 'deleteTour'
  },

  initialize: function (){
    this.listenTo(this.model, "sync", this.render );
  },

  render: function (){
    var content = this.template( {tour: this.model });
    var img;
    if (this.model.images().length > 0 ){
      var imgFirst = this.model.images().models[0];
      img = $.cloudinary.image( imgFirst.escape('url'), {width: 100, height: 100, crop: 'fill' } );
    }
    this.$el.html(content);
    this.$el.find('.img-thumb').html(img);
    return this;
  },

  deleteTour: function(e){
    e.preventDefault();
    var that = this;
    var r = confirm('Delete the tour?');
    if (r) {
      this.model.destroy({
        success: function (){
          that.remove();
        },
        error: function(response){
          // Allow error, users prevented from seeing button on front end
        }
      });
    }

  }

});
