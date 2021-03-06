import { Injectable, Component } from "@angular/core";
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Post } from "../models/Post";
import { Comment } from "../models/Comment";
import { firestore, User } from "firebase/app";
import { Topic } from "../models/Topic";
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';

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
  newUser: any;
  private loggedIn: boolean;

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  constructor(private firestore: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.postCollection = this.firestore.collection("posts", ref => ref.orderBy('timestamp', 'desc'));
    this.commentsCollection = this.firestore.collection("comments");
    this.posts = this.postCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Post;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.topics = this.firestore.collection("topics", ref => ref.orderBy('topic', 'asc')).valueChanges();

    this.afAuth.user.subscribe(user => {
      if (user == null) {
        this.loggedIn = false;
        this.router.navigateByUrl('/login');
      } else {
        this.loggedIn = true;
        this.router.navigateByUrl(this.router.url);
      }
    });
  }

  /* Operations on posts */

  getPosts() {
    return this.posts;
  }

  getPost(postId: string) {
    return this.postCollection.doc(postId).valueChanges();
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

  upvotePost(post: Post, uid: string) {
    if (post?.votes.length <= 0) {
      this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: 1 }) });
    } else {
      post?.votes.forEach(vote => {
        if (vote?.uid == uid) {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayRemove({ uid: uid, value: -1 }) });
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: 1 }) });
        } else {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: 1 }) });
        }
      });
    }
  }

  downvotePost(post: Post, uid: string) {
    if (post?.votes.length <= 0) {
      this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: -1 }) });
    } else {
      post?.votes.forEach(vote => {
        if (vote.uid == uid) {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayRemove({ uid: uid, value: 1 }) });
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: -1 }) });
        } else {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: -1 }) });
        }
      });
    }
  }

  calculatePoints(post: Post) {
    let sum = 0;
    post?.votes.forEach(vote => sum += vote.value);
    return sum;
  }

  /* Operations on Topics */

  getTopics() {
    return this.topics;
  }

  /* Operations on comments */
  addComment(comment: Comment) {
    this.commentsCollection.add(comment);
  }

  getComments(postId: string) {
    return this.firestore.collection("comments", ref => ref
      .where("parentId", "==", postId))
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Comment;
          data.id = a.payload.doc.id;
          return data;
        })
      }));
  }

  /* Operations on users */

  createUser(user: { email: string; password: string; username: any; }) {
    this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then(userCredential => {
        this.newUser = user;
        userCredential.user.updateProfile({
          displayName: user.username
        });
        this.insertUserData(userCredential).then(() => {
          this.router.navigate(['/view-posts']);
        });
      })
      .catch(error => {
        this.eventAuthError.next(error);
      })

  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.firestore.doc(`users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      username: this.newUser.username,
    });
  }

  getUserState() {
    return this.afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.eventAuthError.next(error);
      })
      .then(userCredential => {
        if (userCredential) {
          this.loggedIn = true;
          this.router.navigate(['/view-posts']);
        }
      });
  }

  logout() {
    this.loggedIn = false;
    this.router.navigate(['/login']);
    return this.afAuth.signOut();
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  checkLogin() {

  }
}
