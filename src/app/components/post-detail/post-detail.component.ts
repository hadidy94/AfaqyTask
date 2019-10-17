import { Post } from './../../interfaces/post';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  PostId
  post

  constructor(private route: ActivatedRoute , private postService: PostsService) { }

  ngOnInit() {
    this.PostId = this.route.snapshot.paramMap.get('id');
    this.postService.getPost(this.PostId).subscribe(
      (data) =>{
        this.post = data;
      }
    )
  }

  updatepost(form){
    let title = (<Post>form.value).title
    let body = (<Post>form.value).body
    let updatedPost= { title:title , body:body}
    console.log(updatedPost)
    this.postService.updatePost(this.PostId,updatedPost).subscribe(
      data => console.log(data)
      )
  }

}
