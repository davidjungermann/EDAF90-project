import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from "../../models/Post";
import { firestore } from 'firebase';
import { Topic } from 'src/app/models/Topic';
import { Router } from '@angular/router';

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
    timestamp: null,
    user: ''
  }
  placeholder: any;
  topics: Topic[];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getTopics().subscribe(topics => {
      this.topics = topics;
    });

    this.postService.getUserState().subscribe(user => {
      this.post.user = user.displayName;
    });
  }

  onSubmit() {
    if (this.post.title != '' && this.post.content != '') {
      this.post.timestamp = firestore.Timestamp.now()
      this.postService.addPost(this.post);
      this.post.title = '';
      this.post.content = '';
      this.post.points = 0;
      this.post.topic = this.placeholder;
      this.router.navigateByUrl("/view-posts")
    }
  }

}
