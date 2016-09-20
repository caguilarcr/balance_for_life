BalanceForLife.Views.CategoryItemView = Marionette.ItemView.extend({
  tagName : 'span',
  id: function() {
    return 'category-' + this.model.get('id');
  },
  template : JST['backbone/templates/category_item'],
  onRender : function () {
    console.log(this.model.get('image').url);
    this.$el.css('background-image', 'url("' + this.model.get('image').url + '")');
  }
});

BalanceForLife.Views.RecipesView = Marionette.CollectionView.extend({
  id : 'recipes-content',
  childView : BalanceForLife.Views.CategoryItemView,
  collection : new BalanceForLife.Collections.Categories(),

  events : {
    'click span' : 'goToCategory'
  },

  goToCategory : function (e) {
    BalanceForLife.router.navigate('recipes/' + $(e.target)[0].id.replace('category-', ''), {trigger: true});
  },

  initialize : function () {
    this.collection.fetch();
  }
});
