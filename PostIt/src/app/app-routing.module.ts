import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from './components/post-view/post-view.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { DetailedPostComponent } from './components/detailed-post/detailed-post.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth-guard';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PostViewFilteredComponent } from './components/post-view-filtered/post-view-filtered.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'view-posts', component: PostViewComponent, canActivate: [AuthGuard] },
  { path: 'view-posts/:topic', component: PostViewFilteredComponent, canActivate: [AuthGuard] },
  { path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'view-post/:id', component: DetailedPostComponent, canActivate: [AuthGuard] },
  {
    path: '',
    redirectTo: 'view-posts',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
