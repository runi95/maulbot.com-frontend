import { Component, OnInit } from '@angular/core';
import {Blogpost} from '../blogposts-service/blogpost';
import {BlogpostsService} from '../blogposts-service/blogposts.service';
import {PaginationserviceService} from '../paginationservice/paginationservice.service';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css']
})
export class BlogpostsComponent implements OnInit {

  posts: Blogpost[];

  itemsPerPage: number;
  totalItems: any;
  page: any;
  previousPage: any;

  constructor(private blogpostService: BlogpostsService) {
    this.getBlogposts();
  }

  ngOnInit() {}

  getBlogposts() {
    return this.blogpostService.getUrl().subscribe((data: Blogpost[]) => {
      this.posts = data;
    });
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.getBlogposts();
    }
  }
}
