import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(this.postsUrl).toPromise();
  }
  addPost(post: Post) {
    return this.http.post<Post>(this.postsUrl, post, httpOptions).toPromise();
  }
  updatedPost(post: Post) {
    const url = `${this.postsUrl}/${post.id}`;
    console.log(url);
    return this.http.put<Post>(url, post, httpOptions).toPromise();
  }
  deletePost(post: Post | number) {
    const id = typeof post === 'number' ? post : post.id;
    const url = `${this.postsUrl}/${id}`;
    return this.http.delete<Post>(url, httpOptions).toPromise();
  }
}
