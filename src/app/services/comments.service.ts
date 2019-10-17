import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getComment(id){
    return this.http.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
  }
}
