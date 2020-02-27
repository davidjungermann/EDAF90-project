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

}
