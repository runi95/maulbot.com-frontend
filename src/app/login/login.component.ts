import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private _auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }


  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        const tokenJWT = res.access;
        const refreshJWT = res.refresh;
        let jwtData = tokenJWT.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        localStorage.setItem('token', tokenJWT);
        localStorage.setItem('tokenExpire', decodedJwtData.exp);
        localStorage.setItem('username', decodedJwtData.name);
        localStorage.setItem('staff', decodedJwtData.staff);
        jwtData = refreshJWT.split('.')[1];
        decodedJwtJsonData = window.atob(jwtData);
        decodedJwtData = JSON.parse(decodedJwtJsonData);
        localStorage.setItem('refreshtoken', refreshJWT);
        localStorage.setItem('refreshtokenExpire', decodedJwtData.exp);
        this.router.navigate(['/']);
      },
      error1 => console.log(error1)
    );
  }

}
