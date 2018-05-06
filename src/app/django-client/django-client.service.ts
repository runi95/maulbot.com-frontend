
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DjangoClientService {

  constructor(private http: HttpClient) { }
  gametableUrl = 'https://maulbot.com/api/getGameTable';

  public getGameTable() {
    return this.http.get(this.gametableUrl).pipe(
      map(response => response));
  }
}
