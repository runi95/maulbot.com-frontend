import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blogpost} from './blogpost';

@Injectable()
export class BlogpostsService {

  apiUrl = 'http://192.168.2.108:13800/api/blogPosts';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get<Blogpost[]>(this.apiUrl);
  }

}
