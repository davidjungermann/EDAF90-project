import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";
import { PostViewComponent } from "./components/post-view/post-view.component";
import { PostService } from "./services/post.service";

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  declarations: [AppComponent, PostViewComponent],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
