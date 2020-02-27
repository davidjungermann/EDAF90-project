import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { PostViewComponent } from "./components/post-view/post-view.component";
import { CommentsViewComponent } from "./components/comments-view/comments-view.component";
import { PostService } from "./services/post.service";
import { HomeViewComponent } from './components/home-view/home-view.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { CommentComponent } from './components/comment/comment.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'view-posts', component: PostViewComponent },
  { path: 'create-post', component: CreatePostComponent },
  {
    path: '',
    redirectTo: '/view-posts',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [AppComponent, PostViewComponent, CommentsViewComponent, HomeViewComponent, PostComponent, CreatePostComponent, CommentComponent],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
