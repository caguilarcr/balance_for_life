BalanceForLife.Models.Recipe = Backbone.Model.extend({
  defaults : {
    name : '',
    label : ''
  }
});

BalanceForLife.Collections.Recipes = Backbone.Collection.extend({
  model : BalanceForLife.Models.Recipe,
  url : function () {
    return '/api/recipes?category=' + this.category;
  }
});