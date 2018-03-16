import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MlbGameService } from '../mlb-game.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { GamesOfDay } from '../models/games-of-day';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date = new Date();
  gamesOfDay: GamesOfDay;

  constructor(private router: Router, private mlbService: MlbGameService) { }

  ngOnInit() {

  }

  /**
   * Fetches all games for User entered date from mlb api
   */
  seeGamesOfDate() {
    this.router.navigate(['/games/' + this.date]);
  }
}
