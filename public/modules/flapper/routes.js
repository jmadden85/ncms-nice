app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/nodeCMS/public', {
      templateUrl: '/nodeCMS/public/modules/flapper/partials/app.html',
      controllerAs: 'main',
      controller: 'MainCtrl'
    })
    .when('/nodeCMS/posts/:postId', {
      templateUrl: '/nodeCMS/public/modules/flapper/partials/post.html',
      controllerAs: 'posts',
      controller: 'PostCtrl'
    })
    .otherwise({
      redirectTo: '/nodeCMS/public'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});