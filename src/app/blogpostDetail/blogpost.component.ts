import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {BlogDetail, GameTable} from '../django-client/Classes';
import {DjangoClientService} from '../django-client/django-client.service';
import {Blogpost} from '../blogposts-service/blogpost';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {
  id: string;
  post: BlogDetail;
  filename: string;
  hasfile = false;


  constructor(
    private route: ActivatedRoute, private router: Router, private djangoClientService: DjangoClientService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getBlogDetail();
  }

  getBlogDetail() {
    return this.djangoClientService.getBlogDetail(this.id).subscribe((data: BlogDetail) => {
      this.post = data;
      if (this.post.mapfile) {
        this.post.filename = this.post.mapfile.substring(this.post.mapfile.lastIndexOf('/') + 1);
        this.hasfile = true;
      }
      console.log(this.post);
    });
  }

}
