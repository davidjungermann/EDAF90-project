import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from "../../models/Post";
import { firestore } from 'firebase';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  post: Post = {
    title: '',
    content: '',
    points: 0,
    timestamp: firestore.Timestamp.now()
  }
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.post.title != '' && this.post.content != '') {
      this.postService.addPost(this.post);
      this.post.title = '';
      this.post.content = '';
      this.post.points = 0;
    }
  }

}
