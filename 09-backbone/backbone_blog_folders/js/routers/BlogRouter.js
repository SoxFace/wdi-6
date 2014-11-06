var app = app || {};

app.BlogRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'posts/:id': 'getPost',
    '*anythingElse': 'pageNotFound'
  },

  index: function () {
    new app.Views.AppView({collection: app.posts});
  },

  getPost: function (id) {
    var post = app.posts.get(id);
    if (!post) {
      app.router.navigate('', {trigger: true});
    } else {
      var view = new app.Views.PostView({model: post});
      view.render();
    }
  },

  pageNotFound: function () {
    app.router.navigate('', {trigger: true});
  }
});
