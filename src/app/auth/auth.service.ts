import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = '/api/user/register';
  private _loginUrl = '/api/token/';
  private _refreshUrl = '/api/token/refresh/';
  private _verifyUrl = '/api/token/verify/';


  constructor(private http: HttpClient, private router: Router) {
  }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshtoken');
    localStorage.removeItem('tokenExpire');
    localStorage.removeItem('refreshtokenExpire');
    localStorage.removeItem('username');
    localStorage.removeItem('staff');
    this.router.navigate(['/']);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  verifyTokenCall(payload) {
    return this.http.post<any>(this._verifyUrl, payload);
  }

  verifyToken() {
    const payload = {'token': this.getToken()};
    this.verifyTokenCall(payload).subscribe(
      res => {
        if (!res.detail) {
        } else {
          this.refreshToken();
        }
      },
      error1 => console.log(error1)
    );
  }


  refreshTokenCall(payload) {
    return this.http.post<any>(this._refreshUrl, payload);
  }

  refreshToken() {
    const payload = {'refresh': this.getRefreshToken()};
    this.refreshTokenCall(payload).subscribe(
      res => {
        if (res.access) {
          const tokenJWT = res.access;
          const jwtData = tokenJWT.split('.')[1];
          const decodedJwtJsonData = window.atob(jwtData);
          const decodedJwtData = JSON.parse(decodedJwtJsonData);
          localStorage.setItem('token', tokenJWT);
          localStorage.setItem('tokenExpire', decodedJwtData.exp);
          localStorage.setItem('username', decodedJwtData.name);
          localStorage.setItem('staff', decodedJwtData.staff);
        } else {
          this.logoutUser();
        }
      },
      error1 => console.log(error1)
    );
  }

  isAdmin() {
    const staffFromStorage = localStorage.getItem('staff');
    const isStaff = JSON.parse(staffFromStorage);
    return isStaff;
  }

  getToken() {
    return localStorage.getItem('token');
  }
  getRefreshToken() {
    return localStorage.getItem('refreshtoken');
  }


  getTokenExpiration() {
    const expiration = localStorage.getItem('tokenExpire');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getRefreshTokenExpiration() {
    const expiration = localStorage.getItem('refreshtokenExpire');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
