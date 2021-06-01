'use strict'

var renderPosts = (function () {
  var galleryContainer = document.querySelector(".gallery__container");
  
  return {
    render(posts) {
      galleryContainer.innerHTML = "";

      for (var i = 0; i < posts.length; i++) {
        var postImageUrl = URL.createObjectURL(posts[i].url);
        var postAuthor = posts[i].author;
        var postDescription = posts[i].description;

        galleryContainer.append(postContainerElement.render(
          postImageUrl,
          postAuthor,
          postDescription
        ))
      }
    },
    renderOne(post) {
      var postImageUrl = URL.createObjectURL(post.url);
      var postAuthor = post.author;
      var postDescription = post.description;

      galleryContainer.append(postContainerElement.render(
        postImageUrl,
        postAuthor,
        postDescription
      ))
    }
  }
})();