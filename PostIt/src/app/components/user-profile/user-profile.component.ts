import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { Post } from 'src/app/models/Post';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  filteredPosts: Post[];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getUserState().subscribe(user => {
      this.user = user;
    });

    this.postService.getPosts().pipe(map(posts => posts.filter(post => post?.uid == this.user.uid))).subscribe(posts => {
      this.filteredPosts = posts;
    })
  }
}
