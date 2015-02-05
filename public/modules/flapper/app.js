var app = angular.module('flapperNews', ['ngRoute']);

app.factory('posts', function () {
    var service = {};
    service.posts = [];
    service.addPost = function (post) {
      service.posts.push(post);
    };
    return service;
  }
);

app.controller('TestCtrl', [function () {
    var test = this;
    test.text = 'this is our testing page';
  }]
);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/test', {
      templateUrl: 'test.html',
      controllerAs: 'test',
      controller: 'TestCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
});

app.controller('MainCtrl', ['posts', function (posts) {
    var main = this;
    main.test = 'Testing 1 2 3';
    main.list = ['a', 'b', 'c', 'd'];
    main.buttonText = "some button";
    main.posts = posts.posts;
    main.addPosts = posts.addPost;
    main.buttonClick = function () {
      alert(main.buttonText);
    };
    main.formSubmit = function () {
      main.addPosts(this.title);
      return false;
    };
  }]
);