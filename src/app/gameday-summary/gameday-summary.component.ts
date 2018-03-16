import { Input, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { GamesOfDay } from '../models/games-of-day';
import { GameSummary } from '../models/game-summary';
import { MlbGameService } from '../mlb-game.service';
import { Boxscore } from '../models/boxscore';

@Component({
  selector: 'app-gameday-summary',
  templateUrl: './gameday-summary.component.html',
  styleUrls: ['./gameday-summary.component.css']
})
export class GamedaySummaryComponent implements OnInit {
  games$: Observable<GameSummary[]>;
  games: GamesOfDay;
  date: Date;
  showDetails = false; // indicator if user has clicked on game and wants to see details
  boxscore: Boxscore;
  favoriteTeam = 'Blue Jays';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mlbService: MlbGameService) {
      this.date = new Date(this.route.snapshot.paramMap.get('date'));
      console.log(this.date);

      this.games$ = this.mlbService.getGamesForDate(this.date)
        .map(gamesObj => {
          this.games = gamesObj;
          return gamesObj.games;
        });
      // .subscribe(gamesResponse => {
      //   this.games = gamesResponse;
      // });
    }

  ngOnInit() {
  }

  hideGameDetails() {
    this.showDetails = false;
    this.boxscore = null;
  }
  showGameDetails(game: GameSummary) {
    this.showDetails = true;
    this.mlbService.getGameDataDetails(game.gameDataDirectoryUrl)
      .subscribe(boxscore => {
        console.log(boxscore);
        this.boxscore = boxscore;
      });
  }

}
