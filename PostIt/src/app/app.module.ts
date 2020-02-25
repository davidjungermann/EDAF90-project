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

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [AppComponent, PostViewComponent, CommentsViewComponent, HomeViewComponent],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
