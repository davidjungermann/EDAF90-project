import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/Post";
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  @Input() post: Post;

  deletePost(post: Post) {
    this.postService.deletePost(post);
  }

  upvotePost(post : Post) {
    this.postService.upvotePost(post);
  }

  downvotePost(post : Post) {
    this.postService.downvotePost(post);
  }

  /*downvotePost(post : Post) {
    this.postService.downvotePost(post);
  } */
}
