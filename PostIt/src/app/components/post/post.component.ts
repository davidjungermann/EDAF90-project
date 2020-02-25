import { Component, OnInit, Input } from "@angular/core";
import { Post } from "src/app/models/Post";
import { firestore } from 'firebase';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: "app-post",
  templateUrl: "./post.component.html",
  styleUrls: ["./post.component.css"]
})
export class PostComponent implements OnInit {
  timestamp: Date;
  constructor() {}

  ngOnInit(): void {
  }

  @Input() post: Post;
}
