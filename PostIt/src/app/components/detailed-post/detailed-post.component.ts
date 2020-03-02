import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  post: Post;
  postObservable: Observable<Post[]>;
  id: String;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postObservable = this.postService.getPosts();

    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    });

    this.postObservable.subscribe(posts => {
      this.post = posts.find(post => post.id == this.id);
      console.log(this.post);
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
