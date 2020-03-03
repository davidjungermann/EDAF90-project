import { Component, OnInit, Input } from "@angular/core";
import { Comment } from "../../models/Comment";
import { PostService } from "../../services/post.service";
import { Post } from "../../models/Post";

@Component({
	selector: "app-comments-view",
	templateUrl: "./comments-view.component.html",
	styleUrls: ["./comments-view.component.css"]
})

export class CommentsViewComponent implements OnInit {
	comments: Comment[];

	constructor(
		private postService: PostService
	) { }

	@Input() post: Post;

	ngOnInit(): void {
		this.postService.getComments(this.post.id).subscribe(comments => {
			this.comments = comments;
		});
	}
}
