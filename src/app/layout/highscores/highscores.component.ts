import {Component, OnInit} from '@angular/core';
import {GameTable, PlayerStats} from '../../services/django-client/Classes';
import {DjangoClientService} from '../../services/django-client/django-client.service';

@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {
  highscores: PlayerStats[];

  pageSize = 20;
  collectionSize: number;
  page = 1;

  constructor(private djangoClientService: DjangoClientService) {
  }

  ngOnInit() {
    this.getHighScores();

  }

  shouldShow(index: number): boolean {
    const indexPage: number = Math.floor(index / this.pageSize) + 1;
    return this.page === indexPage;


  }

  hasRankIMG(rank) {
    switch (rank) {
      case 0:
      case 1:
      case 2:
        return true;
      default:
        return false;
    }
  }

  getRankIMG(rank) {
    switch (rank) {
      case 0:
        return '/static/ang/assets/img/gold.png';
      case 1:
        return '/static/ang/assets/img/silver.png';
      case 2:
        return '/static/ang/assets/img/bronze.png';
    }
  }

  getHighScores() {
    return this.djangoClientService.getHighscores().subscribe((data: PlayerStats[]) => {
      this.highscores = data;
      this.collectionSize = this.highscores.length;
    });
  }
}
