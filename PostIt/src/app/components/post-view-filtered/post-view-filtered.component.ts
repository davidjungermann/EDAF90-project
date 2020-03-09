import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';
import { User } from 'firebase';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-view-filtered',
  templateUrl: './post-view-filtered.component.html',
  styleUrls: ['./post-view-filtered.component.css']
})
export class PostViewFilteredComponent implements OnInit {
  user: User;
  filteredPosts: Post[];
  topic: string;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.topic = params.get("topic");


      this.postService.getPosts().pipe(map(posts => posts.filter(post => post?.topic == this.topic))).subscribe(posts => {
        this.filteredPosts = posts;
      });

    });
  }

  ngOnChange(): void {
  }
}
