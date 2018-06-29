import { Component, OnInit } from '@angular/core';
import {AccountInfo, LevelAvatar} from '../../services/django-client/Classes';
import {DjangoClientService} from '../../services/django-client/django-client.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  accountInfo: AccountInfo;

  constructor(private djangoClientService: DjangoClientService) { }

  ngOnInit() {
    this.getAccountInfo();
  }

  getAccountInfo() {
    return this.djangoClientService.getAccountInfo().subscribe((data: AccountInfo) => {
      this.accountInfo = data;
    });
  }
  updateAvatar(event: boolean) {
    this.getAccountInfo();
  }

}
