import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Post } from "../models/Post";
import { Comment } from "../models/Comment";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class PostService {
  postCollection: AngularFirestoreCollection<Post>;
  commentsCollection: AngularFirestoreCollection<Comment>;
  posts: Observable<Post[]>;
  comments: Observable<Comment[]>;

  constructor(public firestore: AngularFirestore) {
    this.posts = this.firestore.collection("posts").valueChanges();
    this.comments = this.firestore.collection("comments").valueChanges();
  }

  getPosts() {
    return this.posts;
  }

  getPost(postId: number) {
    /*const filtered = this.posts.filter(post => post.id == postId);
    if (filtered.length == 0) {
      return null;
    } else {
      return filtered[0];
    }*/
  }

  getComments(postId: number) {
    //return this.comments.filter(comment => comment.parent == postId);

  }
}
