BalanceForLife.Models.Category = Backbone.Model.extend({
  defaults : {
    name : '',
    label : '',
    recipes : {}
  },
  fetch : function () {
    this.recipes = new BalanceForLife.Collections.Recipes();
    this.recipes.fetch();
  }
});

BalanceForLife.Collections.Categories = Backbone.Collection.extend({
  model : BalanceForLife.Models.Category,
  url : '/api/recipe_categories'
});