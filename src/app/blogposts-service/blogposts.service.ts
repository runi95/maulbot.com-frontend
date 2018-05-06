import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blogpost} from './blogpost';

@Injectable()
export class BlogpostsService {

  apiUrl = 'https://maulbot.com/api/blogPosts';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get<Blogpost[]>(this.apiUrl);
  }

}
