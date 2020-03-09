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
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { CreateCommentComponent } from './components/create-comment/create-comment.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PostViewFilteredComponent } from './components/post-view-filtered/post-view-filtered.component';

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  declarations: [AppComponent, PostViewComponent, CommentsViewComponent, HomeViewComponent, PostComponent, CreatePostComponent, CommentComponent, DetailedPostComponent, CreateCommentComponent, RegistrationComponent, LoginComponent, PageNotFoundComponent, UserProfileComponent, PostViewFilteredComponent, FooterComponent],
  providers: [PostService, AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
