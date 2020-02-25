import { Component, OnInit } from "@angular/core";
import { Comment } from "../../models/Comment";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

@Component({
	selector: "app-comments-view",
	templateUrl: "./comments-view.component.html",
	styleUrls: ["./comments-view.component.css"]
})

export class CommentsViewComponent implements OnInit {
	post: Post;
	comments: Comment[];

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private postService: PostService
	) {}

	ngOnInit(): void {
		const postId = +this.route.snapshot.paramMap.get('id');
		this.postService.getPost(postId).subscribe(post => {
			this.post = post;
		});
		this.postService.getComments(postId).subscribe(comments => {
			this.comments = comments;
		});
	}
}
