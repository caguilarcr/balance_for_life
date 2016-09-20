BalanceForLife.Routers.MainRouter = Backbone.Router.extend({
  routes: {
    'recipes/:category' : 'goToCategory',
    ':section' : 'goToSection',
    '*any' : 'goToStart'
  },
  goToStart : function () {
    this.goToSection();
  },
  goToCategory : function (category) {
    var recipes = new BalanceForLife.Collections.Recipes();
    recipes.category = category;
    BalanceForLife.contentRegion.show(new BalanceForLife.Views.CategoryView({collection: recipes}));
    BalanceForLife.navRegion.currentView.highlight('recipes');
  },
  goToSection : function (section) {
    var sectionName = section || 'start'
      viewName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1) + 'View',
      view = BalanceForLife.Views[viewName];

    if (!view) {
      sectionName = 'start'
      view = BalanceForLife.Views.StartView;
    }

    BalanceForLife.contentRegion.show(new view());
    BalanceForLife.navRegion.currentView.highlight(sectionName);
  }
});