import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import "firebase/firestore";
import { PostService } from './services/post.service';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  posts: Observable<any[]>;
  title: any;
  constructor(firestore: AngularFirestore, postService : PostService) {
    this.posts = firestore.collection("posts").valueChanges();
  }
}
