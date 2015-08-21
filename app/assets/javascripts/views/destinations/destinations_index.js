Tryable.Views.DestinationsIndex = Backbone.CompositeView.extend({
  template: JST['destinations/index'],
  events: {
    'click button' : 'search'
  },

  initialize: function (){
    this.collection.fetch();
    this.listenTo( this.collection, "sync", this.addAutocomplete );
    this.backdrop_url = $.cloudinary.image('static/swimming.jpg', {width: 1500, height: 500, crop: 'fill' } ).attr('src');
  },

  render: function (){
    var content = this.template({places: this.collection});
    this.$el.html(content);
    this.$el.append(this.backdrop);
    this.$el.find('.jumbotron').attr("style", "background-image: url(" + this.backdrop_url + ")");
    this.addAutocomplete();
    this.addPreviewImgs();
    return this;
  },

  addAutocomplete: function(){
    $("#search-places").autocomplete({
      source: this.collection.pluck('name'),
        close: function(event, ui){
          this.search(event);
        }.bind(this)
    });
    $('#search-places').focus();
  },

  addPreviewImgs: function(){
    var headers = ["New", "Highest Rated", "Editor's Picks", "Coffee", "Foodie"];
    var i = 1;
    headers.forEach( function(header) {
      var img = $.cloudinary.image('static/'+ i, {height: 200, width: 200, crop: 'fill'});
      var wrapper = $('<div><h4>' + header + '</h4></div>');
      wrapper.addClass('grow pic');
      wrapper.append(img);
      this.$('.preview-imgs').append(wrapper);
      i ++;
    }.bind(this));
  },

  search: function(e){
    var placeName = this.$el.find('#search-places').val()
    var place = this.collection.findWhere({name: placeName });
    if (place !== undefined){
      Backbone.history.navigate('destinations/'+ place.escape('id'), {trigger: true} );
    }
  }

});
