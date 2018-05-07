import {Component, OnInit} from '@angular/core';

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

  constructor() {
  }

  ngOnInit() {
  }

  registerUser() {
    console.log(this.registerUserData);
    if (this.registerUserData.password !== this.registerUserData.password1) {
      this.formError = 'The passwords do not match.';
    }

  }
}
