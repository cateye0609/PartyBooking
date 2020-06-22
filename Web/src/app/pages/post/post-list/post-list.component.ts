import { Component, OnInit } from '@angular/core';

// Models
import { Post } from '../../../_models/post.model';
// Services
import { PostService } from '../../../_services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  post_list: Post[] = [];
  total_pages: number;
  current_index: number = 1;
  constructor(
    private postService: PostService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.get_posts_list(1);
  }

  // Lấy danh sách bài viết
  get_posts_list(page: number) {
    this.postService.get_posts_list(page).subscribe(
      res => {
        this.post_list = res.data.value as Post[];
        this.total_pages = res.data.total_page;
      },
      err => {
        console.log("Error: " + err.error.message);
        this.toastr.error("Error loading posts list!");
      }
    )
  }
}