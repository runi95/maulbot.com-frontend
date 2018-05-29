import {Component, OnDestroy, OnInit} from '@angular/core';
import {DjangoClientService} from '../django-client/django-client.service';
import {getOrSetAsInMap} from '@angular/animations/browser/src/render/shared';
import {GameTable} from '../django-client/Classes';
import {Blogpost} from '../blogposts-service/blogpost';
import {st} from '@angular/core/src/render3';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})

export class GameTableComponent implements OnInit, OnDestroy {
  gamelist: GameTable[];
  interval: any;

  constructor(private djangoClientService: DjangoClientService) {
  }

  showConfig() {
    this.djangoClientService.getGameTable()
      .subscribe(
        /*(data) => {
          for (const game of data) {
            if (!game.getActive) {
              continue;
            }
            const tempGame = {
              'botname': game.botname,
              'europe.battle.net': 0,
              'uswest.battle.net': 0,
              'useast.battle.net': 0,
              'asia.battle.net': 0,
            };
            const botStatus = JSON.parse(game.status);
            for (const server of botStatus) {
              for (const key of server) {
                console.log(key);
                console.log(tempGame[key]);
                tempGame[key] = server[key];
              }
            }

            this.gamelist.push(tempGame);
          }
          console.log(this.gamelist)
        },
        (err) => console.log(err)*/
      );
  }


  ngOnInit() {
    this.getGameTable();
    this.interval = setInterval(() => {
      this.getGameTable();
    }, 2000);
  }

  getGameTable() {
    return this.djangoClientService.getGameTable().subscribe((data: GameTable[]) => {
      this.gamelist = data;
    });
  }

  cleanString(string) {
    return string.replace(/[^0-9a-zA-Z \]\[#]/g, '');
  }

  getMaximumPlayer(string) {
      if (string === 'MaulBot') {
        return '13';
      } else if (string === 'MaulBot.1') {
        return '9';
      } else if (string === 'IM') {
        return 'far fa-code-branch';
      } else if (string === 'OTR') {
        return 'fas fa-info';
      } else {
        return '999';
      }
    }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

}
