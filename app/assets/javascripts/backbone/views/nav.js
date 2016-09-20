BalanceForLife.Views.NavItemView = Marionette.ItemView.extend({
  tagName : 'li',
  id: function() {
    return 'nav-' + this.model.get('value');
  },
  template : _.template('<%= label %>')
});

BalanceForLife.Views.NavView = Marionette.CollectionView.extend({
  tagName : 'ul',
  childView : BalanceForLife.Views.NavItemView,
  collection : new Backbone.Collection(BalanceForLife.Constants.NAV_ITEMS),

  events: {
    'click li': 'navigateTo'
  },

  navigateTo : function (e) {
    BalanceForLife.router.navigate($(e.target)[0].id.replace('nav-', ''), {trigger: true});
  },

  highlight : function (section) {
    this.$('li').removeClass('selected');
    this.$('#nav-' + section).addClass('selected');
  }
});