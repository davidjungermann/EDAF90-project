import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { Topic } from 'src/app/models/Topic';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/Post';
import { firestore, User } from 'firebase';

@Component({
  selector: "app-home-view",
  templateUrl: "./home-view.component.html",
  styleUrls: ["./home-view.component.css"]
})
export class HomeViewComponent implements OnInit {
  post: Post = {
    title: '',
    content: '',
    timestamp: firestore.Timestamp.now()
  }
  placeholder: any;
  topics: Topic[];
  user : firebase.User;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getTopics().subscribe(topics => {
      this.topics = topics;
    });
    this.postService.getUserState().subscribe(user => {
      this.user = user;
    });
  }

  isLoggedIn() {
    return this.postService.isLoggedIn();
  }

  logout() {
    this.postService.logout();
  }
}
