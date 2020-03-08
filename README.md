# EDAF90-project
Angular project in Web programming (EDAF90) at LTH.

*TODO:* 
CRUD
Component to render and view one post. 
Home-page component.
Sort posts.


upvotePost(post: Post, uid: string) {
    if (post?.votes.length <= 0) {
      this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: 1 }) });
    } else {
      post?.votes.forEach(vote => {
        if (vote?.uid == uid) {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayRemove({ uid: uid }) });
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: 1 }) });
        } else {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: 1 }) });
        }
      });
      console.log(post);
    }
  }

  downvotePost(post: Post, uid: string) {
    if (post?.votes.length <= 0) {
      this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: -1 }) });
    } else {
      post?.votes.forEach(vote => {
        if (vote.uid == uid) {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayRemove({ uid: uid }) });
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: -1 }) });
        } else {
          this.firestore.doc(`posts/${post.id}`).update({ votes: firestore.FieldValue.arrayUnion({ uid: uid, value: -1 }) });
        }
      });
      console.log(post);
    }
  }