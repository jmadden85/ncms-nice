'use strict';

app.controller('MainCtrl', ['posts', function (posts) {
    var main = this;
    main.posts = posts.posts;
    main.addPosts = posts.addPost;

    main.postSubmit = function () {
      main.addPosts(this.post);
      return false;
    };

  }]
);

app.controller('PostCtrl', ['posts', '$route', '$routeParams', function (posts, $route, $routeParams) {
    var post = this;
    post.id = parseInt($routeParams.postId, 10);
    post.contents = posts.getPost(post.id);
    post.addComment = posts.addComment;

    post.comments = posts.getPost(post.id).comments;

    post.submitComment = function () {
      console.log(post.comments);
      post.addComment(this.comment, post.id);
      return false;
    };
  }]
);