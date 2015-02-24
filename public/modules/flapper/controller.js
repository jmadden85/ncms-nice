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

app.controller('PostCtrl', ['posts', function (posts) {

  }]
);