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
}
