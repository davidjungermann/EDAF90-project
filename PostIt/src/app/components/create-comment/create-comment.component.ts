import { Component, OnInit, Input } from '@angular/core';
import { Post } from "src/app/models/Post";
import { Comment } from "src/app/models/Comment";
import { firestore } from 'firebase';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css']
})
export class CreateCommentComponent implements OnInit {

  comment: Comment = {
    parentId: '',
    content: '',
    timestamp: null,
    user: ''
  }

  constructor(private postService: PostService) { }

  @Input() post: Post;

  ngOnInit(): void {
    this.comment.parentId = this.post.id;

    this.postService.getUserState().subscribe(user => {
      this.comment.user = user?.displayName;
    });
  }

  onSubmit() {
    if (this.comment.content != '') {
      this.comment.timestamp = firestore.Timestamp.now();
      this.postService.addComment(this.comment);
      this.comment.content = '';
    }
  }
}
