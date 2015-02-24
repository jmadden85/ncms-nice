app.factory('posts', function () {
    var service = {};

    var getDate = function () {
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDay + 1;
      var year = date.getYear();
      var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      var minutes = date.getMinutes();
      var dateString = hour + ":" + minutes + "|" + month + "-" + day + "-" + year;
      return dateString;
    };

    var findPost = function (element, index, array, that) {
      if (element.id === that.id) {
        return {el: element, i: index};
      } else {
        return false;
      }
    };

    service.posts = [];

    service.addPost = function (post) {
      var thisPost = {
        text: post,
        id: service.posts.length,
        comments: []
      };
      service.posts.push(thisPost);
      console.log(thisPost.id, thisPost.text);
    };

    service.addComment = function (comment, id) {
      var that = this;
      var that.id = id;
      var thisComment = {
        text: comment,
        date: getDate()
      };
      $filter('posts')(services.posts, function () {

      });
    };

    return service;
  }
);