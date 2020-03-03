import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsViewComponent } from './components/comments-view/comments-view.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'view-posts', component: PostViewComponent },
  { path: 'create-post', component: CreatePostComponent },
  { path: 'view-post/:id', component: DetailedPostComponent },
  {
    path: '',
    redirectTo: '/view-posts',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
