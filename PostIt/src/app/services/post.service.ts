import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Time } from "@angular/common";
import { Post } from "../models/Post";

@Injectable({
  providedIn: "root"
})
export class PostService {
  postCollection: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;

  constructor(public firestore: AngularFirestore) {
    this.posts = this.firestore.collection("posts").valueChanges();
  }

  getPosts() {
    return this.posts;  
  }
}
