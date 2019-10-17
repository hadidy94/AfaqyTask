import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts(){
    
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPost(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+  id)
  }

  deletePost(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/'+  id)
  }
  updatePost(id , data){
   return this.http.put('https://jsonplaceholder.typicode.com/posts/'+id , JSON.stringify(data))
  }
  
}
