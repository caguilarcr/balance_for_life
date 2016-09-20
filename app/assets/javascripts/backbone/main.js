BalanceForLife = new Backbone.Marionette.Application();

BalanceForLife.Constants = {
  NAV_ITEMS : [
    {value: 'start', label: 'Inicio'},
    {value: 'about', label: 'Balance For Life'},
    // {value: 'blog', label: 'Blog'},
    {value: 'recipes', label: 'Recetas'},
    {value: 'contact', label: 'Contacto'}
  ]
};

BalanceForLife.Views = {};
BalanceForLife.Models = {};
BalanceForLife.Collections = {};
BalanceForLife.Routers = {};
BalanceForLife.router = {};

BalanceForLife.addRegions({
  navRegion: "#nav",
  contentRegion: "#content"
});

BalanceForLife.addInitializer(function(options){
  BalanceForLife.router = (new BalanceForLife.Routers.MainRouter());
  BalanceForLife.navRegion.show(new BalanceForLife.Views.NavView());
  Backbone.history.start();
});