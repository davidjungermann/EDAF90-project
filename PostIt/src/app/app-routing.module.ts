import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from './components/post-view/post-view.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'view-posts', component: PostViewComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AngularFireAuthGuard] },
  { path: 'view-post/:id', component: DetailedPostComponent, canActivate: [AngularFireAuthGuard] },
  {
    path: '',
    redirectTo: 'view-posts',
    pathMatch: 'full',
    canActivate: [AngularFireAuthGuard]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
