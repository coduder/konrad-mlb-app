import { Input, Component, OnInit } from '@angular/core';
import { Boxscore } from '../models/boxscore';
import { Team } from '../models/team';

@Component({
  selector: 'app-gameday-detail',
  templateUrl: './gameday-detail.component.html',
  styleUrls: ['./gameday-detail.component.css']
})
export class GamedayDetailComponent implements OnInit {
  @Input() boxscore: Boxscore;
  homeTeam: Team;
  awayTeam: Team;
  currentTeam: Team;  // Team whose batters are currently displayed

  constructor() { }

  ngOnInit() {
    this.homeTeam = this.boxscore.homeTeam;
    this.awayTeam = this.boxscore.awayTeam;
    this.currentTeam = this.homeTeam;
  }

  /**
   * Changes current team to param team in order to display chosen team
   * @param team Team to show
   */
  showBatters(team: Team) {
    this.currentTeam = team;
  }

}
