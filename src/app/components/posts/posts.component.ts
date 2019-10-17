import { Component, OnInit } from "@angular/core";
import { Post } from "./../../interfaces/post";
import { PostsService } from "src/app/services/posts.service";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.css"]
})
export class PostsComponent implements OnInit {
  posts: Post;
  pageOfItems: Array<any>;

  constructor(private postServices: PostsService) {}

  ngOnInit() {
    // git all posts
    this.postServices.getAllPosts().subscribe((data: Post) => {
      this.posts = data;
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  deletePost(id) {
    this.postServices.deletePost(id)
  }
}
