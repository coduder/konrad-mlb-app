import { Component } from '@angular/core';
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
export class GamedaySummaryComponent {
  games$: Observable<GameSummary[]>;
  games: GamesOfDay;
  date: Date;
  showDetails = false;        // indicator if user has clicked on game and wants to see details
  boxscore: Boxscore;
  teams: string[];            // all teams playing on this.date (populates favorite team array)
  favoriteTeam = 'Blue Jays'; // 2-way bound to user selection value, use flex order 1 to display at top, set class with ngClass

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private mlbService: MlbGameService) {
      // update date and summary view when we get a new date
      this.route.params.subscribe(data => {
        this.date = new Date(data.date);

        this.games$ = this.mlbService.getGamesForDate(this.date)
        .map(gamesObj => {
          this.games = gamesObj;
          this.teams = gamesObj.teams.sort();
          return gamesObj.games;
        });

      });
      console.log(this.date);
    }

  /**
   * Hides details component and clears boxscore so new details can be loaded
   * for different team selection
   */
  hideGameDetails() {
    this.showDetails = false;
    this.boxscore = null;
  }

  /**
   * Shows game detail information (boxscore and batters) for specified game
   * @param game GameSummary object for desired details view
   */
  showGameDetails(game: GameSummary) {
    this.showDetails = true;
    this.mlbService.getGameDataDetails(game.gameDataDirectoryUrl)
      .subscribe(boxscore => {
        console.log(boxscore);
        this.boxscore = boxscore;
      });
  }

  /**
   * moves to next days games view
   */
  nextGameDay() {
    // crafting date to ensure months and years carry over
    const nextDate = new Date(this.date.setTime( this.date.getTime() + 86400000 ));
    this.router.navigate(['/games/' + nextDate]);
  }

  /**
   * moves to previous days games view
   */
  prevGameDay() {
    // crafting date to ensure months and years carry over
    const prevDate = new Date(this.date.setTime( this.date.getTime() - 86400000 ));
    this.router.navigate(['/games/' + prevDate]);
  }

}
