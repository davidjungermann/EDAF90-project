import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';
import { AngularFirestoreCollection } from '@angular/fire/firestore/public_api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailed-post',
  templateUrl: './detailed-post.component.html',
  styleUrls: ['./detailed-post.component.css']
})
export class DetailedPostComponent implements OnInit {
  post: Post;
  postObservable: Observable<Post[]>;
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postObservable = this.postService.getPosts();

    this.postObservable.subscribe(posts => {
      this.posts = posts;
      console.log(this.posts)
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
