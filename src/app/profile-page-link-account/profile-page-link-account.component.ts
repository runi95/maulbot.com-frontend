import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page-link-account',
  templateUrl: './profile-page-link-account.component.html',
  styleUrls: ['./profile-page-link-account.component.css']
})
export class ProfilePageLinkAccountComponent implements OnInit {
  types = [
    {'SHORT': 'connect-eur.classic.blizzard.com', 'LONG': 'Northerend (Europe)'},
    {'SHORT': 'connect-usw.classic.blizzard.com', 'LONG': 'Lordaeron (U.S. West)'},
    {'SHORT': 'connect-use.classic.blizzard.com', 'LONG': 'Azeroth (U.S. East)'},
    {'SHORT': 'connect-kor.classic.blizzard.com', 'LONG': 'Kalimdor (Asia)'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
