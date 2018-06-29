import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Comment, SignUpError} from '../../services/django-client/Classes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  error: SignUpError;


  registerUserData = {
    'email': '',
    'username': '',
    'password': '',
    'password1': '',
  };
  formError: String;

  constructor(private _auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {

  }

  registerUser() {
    if (this.registerUserData.password !== this.registerUserData.password1) {
      this.formError = 'The passwords do not match.';
    } else {
      this._auth.registerUser(this.registerUserData)
        .subscribe(
          res => {
            this.router.navigate(['/login']);
          },
          err => {
            this.error = err.error;
          }
        );
    }

  }
}
