import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Suggestion} from '../django-client/Classes';

@Injectable()
export class SuggestionsService {

  apiUrl = 'http://192.168.2.108:13800/api/suggestions';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get<Suggestion[]>(this.apiUrl);
  }

}
