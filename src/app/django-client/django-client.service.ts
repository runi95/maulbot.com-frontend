import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BlogDetail, GameChart, GameTable, SuggestionDetail} from './Classes';

@Injectable()
export class DjangoClientService {

  tableApiURL = 'http://192.168.2.108:13800/api/getGameTable?format=json';
  chartApiURL = 'http://192.168.2.108:13800/api/getGameChart?format=json';
  blogDetailUrl = 'http://192.168.2.108:13800/api/blogPosts/';
  suggestionDetailUrl = 'http://192.168.2.108:13800/api/suggestions/';


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


}
