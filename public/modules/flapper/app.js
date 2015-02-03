var app = angular.module('flapperNews', []);

app.controller('MainCtrl',
  ['$scope',
    function ($scope) {
      $scope.test = 'Testing 1 2 3';
    }
  ]
);