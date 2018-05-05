import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Suggestion} from '../suggestion';

@Injectable()
export class SuggestionsService {

  apiUrl = 'https://maulbot.com/api/suggestions?format=json';

  constructor(private http: HttpClient) { }

  getUrl() {
    return this.http.get<Suggestion[]>(this.apiUrl);
  }

}
