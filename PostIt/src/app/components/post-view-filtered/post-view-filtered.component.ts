import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { User } from 'firebase';

@Component({
  selector: 'app-post-view-filtered',
  templateUrl: './post-view-filtered.component.html',
  styleUrls: ['./post-view-filtered.component.css']
})
export class PostViewFilteredComponent implements OnInit {
  user: User;
  filteredPosts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().pipe(map(posts => posts.filter(post => post?.uid == this.user.uid))).subscribe(posts => {
      this.filteredPosts = posts;
    });

    
  }

}
