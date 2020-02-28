import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.post = history.state;
    console.log(this.post)
  }

  deletePost(post: Post) {
    this.postService.deletePost(post);
  }

  upvotePost(post: Post) {
    this.postService.upvotePost(post);
  }

  downvotePost(post: Post) {
    this.postService.downvotePost(post);
  }

}
