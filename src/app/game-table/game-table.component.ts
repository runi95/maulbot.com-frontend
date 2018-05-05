import {Component, OnInit} from '@angular/core';
import {DjangoClientService} from '../django-client/django-client.service';
import {getOrSetAsInMap} from '@angular/animations/browser/src/render/shared';

@Component({
  selector: 'app-game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css']
})

export class GameTableComponent implements OnInit {
  gamelist = [];


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
    this.showConfig();
  }

}
