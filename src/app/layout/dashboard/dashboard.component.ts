import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../account/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor(public _authService: AuthService) {
  }

  ngOnInit() {
  }


}
