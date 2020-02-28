import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsViewComponent } from './components/comments-view/comments-view.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { CreatePostComponent } from './components/create-post/create-post.component';


const routes: Routes = [
  { path: 'view-posts', component: PostViewComponent },
  { path: 'create-post', component: CreatePostComponent },
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
