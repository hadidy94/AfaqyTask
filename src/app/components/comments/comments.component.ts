import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() postId
  comments: Comment

  constructor(private commentsServices: CommentsService) { }

  ngOnInit() {
    this.commentsServices.getComment(this.postId).subscribe(
      (data:Comment) => this.comments = data
    )
   
  }

}
