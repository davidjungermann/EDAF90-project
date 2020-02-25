import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsViewComponent } from './components/comments-view/comments-view.component';


const routes: Routes = [
	{path: 'post/:id', component: CommentsViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
