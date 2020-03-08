import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';
import { User } from 'firebase';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.postService.getUserState().subscribe(user => {
      this.user = user;
    });
  }

}
