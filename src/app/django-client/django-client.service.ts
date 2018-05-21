import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogDetail, GameChart, GameTable, Suggestion, SuggestionDetail} from './Classes';

@Injectable()
export class DjangoClientService {

  tableApiURL = '/api/getGameTable?format=json';
  chartApiURL = '/api/getGameChart?format=json';
  blogDetailUrl = '/api/blogPosts/';
  suggestionDetailUrl = '/api/suggestions/';
  mySuggestionsUrl = '/api/mySuggestions';
  suggestionListUrl = '/api/suggestions';


  constructor(private http: HttpClient) {
  }

  getGameTable() {
    return this.http.get<GameTable[]>(this.tableApiURL);
  }

  getGameChart() {
    return this.http.get<GameChart[]>(this.chartApiURL);
  }

  getBlogDetail(pk) {
    return this.http.get<BlogDetail>(this.blogDetailUrl + pk);
  }

  getSuggestionDetail(pk) {
    return this.http.get<SuggestionDetail>(this.suggestionDetailUrl + pk);
  }

  listSuggestions() {
    return this.http.get<Suggestion[]>(this.suggestionListUrl);
  }

  getMySuggestions() {
    return this.http.get<Suggestion[]>(this.mySuggestionsUrl);
  }

  newSuggestion(suggestion) {
    return this.http.post<any>(this.suggestionListUrl, suggestion);
  }

  newSuggestionComment(comment, pk) {
    return this.http.post<any>(this.suggestionDetailUrl + pk + '/comment', comment);
  }

  newBlogComment(comment, pk) {
    return this.http.post<BlogDetail>(this.blogDetailUrl + pk + '/comment', comment);
  }

}
