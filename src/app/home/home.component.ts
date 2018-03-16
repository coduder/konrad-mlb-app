import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { GamesOfDay } from '../models/games-of-day';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  date: Date = new Date();
  gamesOfDay: GamesOfDay;

  constructor(private router: Router) { }
  /**
   * Fetches all games for User entered date from mlb api
   */
  seeGamesOfDate() {
    this.router.navigate(['/games/' + this.date]);
  }
}
