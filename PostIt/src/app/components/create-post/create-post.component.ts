import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from "../../models/Post";
import { firestore } from 'firebase';
import { Topic } from 'src/app/models/Topic';
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

  topics: Topic[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getTopics().subscribe(topics => {
      this.topics = topics;
      console.log(this.topics);
    });
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
