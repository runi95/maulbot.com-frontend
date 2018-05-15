
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GameChart, GameTable} from './Classes';

@Injectable()
export class DjangoClientService {

  tableApiURL = 'https://maulbot.com/api/getGameTable?format=json';
  chartApiURL = 'https://maulbot.com/api/getGameChart?format=json';


  constructor(private http: HttpClient) { }

  getGameTable() {
    return this.http.get<GameTable[]>(this.tableApiURL);
  }
  getGameChart() {
    return this.http.get<GameChart[]>(this.chartApiURL);
  }
}
