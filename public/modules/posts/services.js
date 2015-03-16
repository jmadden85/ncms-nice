'use strict';

app.factory('posts', function () {
    var service = {};

    var getDate = function () {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDay() + 1;
      var year = date.getFullYear();
      var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      var minutes = date.getMinutes();
      var dateString = hour + ":" + minutes + " | " + month + "-" + day + "-" + year;
      return dateString;
    };

    var findPost = function (id) {
      return function (element) {
        return element.id === id;
      }
    };

    service.posts = [];
    var post1 = {
      text: 'testing 1...2...3',
      id: 0,
      comments: []
    };
    service.posts.push(post1);

    service.addPost = function (post) {
      var thisPost = {
        text: post,
        id: service.posts.length,
        comments: []
      };
      service.posts.push(thisPost);
    };

    service.getPost = function (id) {
      return service.posts.filter(findPost(id))[0];
    };

    service.addComment = function (comment, id) {
      var thisComment = {
        text: comment,
        date: getDate()
      };
      var thisPost = service.getPost(id);
      thisPost.comments.push(thisComment);
      console.log(service.posts);
    };

    return service;
  }
);