import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  post: Post;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdited: Post;
  constructor(private postService: PostService) {}

  ngOnInit(): void {}
  async addPost(title, body) {
    if (!title || !body) {
      alert('Please Add Post');
    } else {
      try {
        const post = await this.postService.addPost({ title, body } as Post);
        console.log(post);
        this.newPost.emit(post);
      } catch (error) {
        console.log('Post Add Failed');
      }
    }
  }
}
