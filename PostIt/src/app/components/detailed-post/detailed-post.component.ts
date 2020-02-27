import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  state: Observable<Post>;
  post: Post;

  constructor(private postService: PostService, public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.state = this.activatedRoute.paramMap
      .pipe(map(() => window.history.state));

    this.state.subscribe(post => {
      this.post = post;
    });
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
