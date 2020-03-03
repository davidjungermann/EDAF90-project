import { Component, OnInit, Input} from '@angular/core';
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
  	parent: '',
  	content: '',
  	timestamp: firestore.Timestamp.now()
  }

  constructor(private postService: PostService) { }

  @Input() post: Post;

  ngOnInit(): void {
  	this.comment.parent = this.post.id;
  }

  onSubmit() {
  	if (this.comment.content != '') {
  		this.postService.addComment(this.comment);
  		this.comment.parent = '';
  		this.comment.content = '';
  	}
  }
}
