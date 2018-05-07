import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  registerUserData = {
    'password': '',
    'password1': '',
  };
  formError: String;

  constructor(private _auth: AuthService) {
  }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerUserData);
    if (this.registerUserData.password !== this.registerUserData.password1) {
      this.formError = 'The passwords do not match.';
    } else {
      this._auth.registerUser(this.registerUserData)
        .subscribe(
          res => console.log(res),
          err => console.log(err)
        )
    }

  }
}
