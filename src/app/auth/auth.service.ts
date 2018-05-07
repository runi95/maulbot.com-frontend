import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = 'http://192.168.2.108:13800/api/user/register';

  constructor(private http: HttpClient) {
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }
}
