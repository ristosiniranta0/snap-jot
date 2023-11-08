/*
Filename: complexCode.js

This code demonstrates a complex and sophisticated example of a web application that uses JavaScript.

The application is a social media platform that allows users to create posts, comment on posts, and like posts. It also includes a recommendation system based on user preferences.

Please note that this code is a simplified version for demonstration purposes and may not be fully functional or secure without proper implementation.

*/


// Class representing a Post
class Post {
  constructor(author, content) {
    this.author = author;
    this.content = content;
    this.comments = [];
    this.likes = 0;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  like() {
    this.likes++;
  }
}


// Class representing a User
class User {
  constructor(name, preferences) {
    this.name = name;
    this.preferences = preferences;
    this.posts = [];
    this.recommendedPosts = [];
  }

  createPost(content) {
    const post = new Post(this.name, content);
    this.posts.push(post);
  }

  commentOnPost(post, comment) {
    post.addComment(comment);
  }

  likePost(post) {
    post.like();
  }

  recommendPosts(posts) {
    for (let post of posts) {
      if (this.preferences.includes(post.author)) {
        this.recommendedPosts.push(post);
      }
    }
  }
}


// Creating sample users
const john = new User("John", ["Sarah", "Alex"]);
const alex = new User("Alex", ["John"]);
const sarah = new User("Sarah", ["John"]);

// Creating sample posts
const post1 = new Post("John", "Hello world!");
const post2 = new Post("Alex", "Good morning!");
const post3 = new Post("Sarah", "What a beautiful day!");

// Interactions between users
john.createPost("This is my first post!");
alex.likePost(post1);
sarah.commentOnPost(post1, "Welcome to the platform!");
john.recommendPosts([post1, post2, post3]);

// Logging the results
console.log(john);
console.log(alex);
console.log(sarah);
console.log(post1);
console.log(post2);
console.log(post3);