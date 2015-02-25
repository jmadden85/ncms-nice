app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/nodeCMS/public', {
      templateUrl: '/nodeCMS/public/modules/posts/partials/app.html',
      controllerAs: 'main',
      controller: 'MainCtrl'
    })
    .when('/nodeCMS/posts/:postId', {
      templateUrl: '/nodeCMS/public/modules/posts/partials/post.html',
      controllerAs: 'post',
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