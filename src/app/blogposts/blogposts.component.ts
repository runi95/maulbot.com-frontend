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

  pageSize = 7;
  collectionSize: number;
  page = 1;

  constructor(private blogpostService: BlogpostsService, private pagerService: PaginationserviceService) {
    this.getBlogposts();
  }

  ngOnInit() {}

  shouldShow(index: number): boolean {
    const indexPage: number = Math.floor(index / this.pageSize) + 1;
    if(this.page === indexPage) {
      return true;
    }

    return false;
  }

  getBlogposts() {
    return this.blogpostService.getUrl().subscribe((data: Blogpost[]) => {
      this.posts = data;
      this.collectionSize = this.posts.length;
    });
  }


}
