var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [function () {
    var main = this;
    main.test = 'Testing 1 2 3';
    main.list = ['a', 'b', 'c', 'd'];
    main.buttonText = "some button";
    main.buttonClick = function () {
      alert(main.buttonText);
    };
    main.formSubmit = function () {
      console.log(this.title);
      return false;
    };
  }]
);

app.factory('posts', [function () {
    var o = {
      posts: []
    };
    return o;
  }]
);