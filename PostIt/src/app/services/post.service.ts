import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Post } from "../models/Post";
import { Comment } from "../models/Comment";
import { firestore } from "firebase/app";
import { Topic } from "../models/Topic";

@Injectable({
  providedIn: "root"
})
export class PostService {
  postCollection: AngularFirestoreCollection<Post>;
  posts: Observable<Post[]>;
  postDoc: AngularFirestoreDocument<Post>;

  topics: Observable<Topic[]>;

  commentsCollection: AngularFirestoreCollection<Comment>;
  comments: Observable<Comment[]>;

  constructor(public firestore: AngularFirestore) {
    /* Changed this method in order to get the Firestore ID in template files.
       This is needed for deletion and updates.  */

    this.postCollection = this.firestore.collection("posts", ref => ref.orderBy('timestamp', 'desc'));
    this.commentsCollection = this.firestore.collection("comments", ref => ref.orderBy('timestamp', 'desc'));

    this.posts = this.postCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Post;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.topics = this.firestore.collection("topics").valueChanges();
  }

  getPosts() {
    return this.posts;
  }

  getPostsByTopic(topic: Topic = undefined) {
    return this.firestore.collection("posts", ref => ref
      .where("topic", "==", topic.topic)
      .orderBy('timestamp', 'desc'))
      .snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Post;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }

  addPost(post: Post) {
    this.postCollection.add(post);
  }

  deletePost(post: Post) {
    this.firestore.doc(`posts/${post.id}`).delete();
  }

  upvotePost(post: Post) {
    const increment = firestore.FieldValue.increment(1);
    this.firestore.doc(`posts/${post.id}`).update({ points: increment })
  }

  downvotePost(post: Post) {
    const decrement = firestore.FieldValue.increment(-1);
    this.
      firestore.doc(`posts/${post.id}`).update({ points: decrement })
  }

  getTopics() {
    return this.topics;
  }

  getPost(postId: string) {
    return this.postCollection.doc(postId).valueChanges();
  }

  addComment(comment: Comment) {
    this.commentsCollection.add(comment);
  }

  getComments(postId: string) {
    return this.firestore.collection("comments", ref => ref.where("parentId", "==", postId))
      .snapshotChanges().pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Comment;
          data.id = a.payload.doc.id;
          return data;
        });
      }));
  }
}
