import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from '../../models/Post';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post = {
    id: 0,
    title: '',
    body: '',
  };
  isEdited: boolean;
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getPosts();
    this.isEdited = false;
  }

  async getPosts() {
    const data = await this.postService.getPosts();
    this.posts = data;
  }
  newPost(post: Post) {
    this.posts.unshift(post);
  }
  editPost(post: Post) {
    this.isEdited = true;
    this.currentPost = post;
  }
}