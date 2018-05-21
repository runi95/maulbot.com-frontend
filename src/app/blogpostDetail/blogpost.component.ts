import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {BlogDetail, GameTable, NewComment} from '../django-client/Classes';
import {DjangoClientService} from '../django-client/django-client.service';
import {Blogpost} from '../blogposts-service/blogpost';
import {AuthService} from '../auth/auth.service';

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
  formComment = new NewComment();
  submitted = false;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private djangoClientService: DjangoClientService,
    private _authService: AuthService) {
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
      this.submitted = false;
    });
  }

  onSubmit() {
    this.submitted = true;
  }

  newComment() {
    console.log(this.formComment);
    this.djangoClientService.newBlogComment(this.formComment, this.id).subscribe((data: any) => {
      this.formComment = new NewComment();
      this.getBlogDetail();
    });
  }

}
