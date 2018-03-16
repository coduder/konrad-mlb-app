import { Input, Component } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-batter-info',
  templateUrl: './batter-info.component.html',
  styleUrls: ['./batter-info.component.css']
})
export class BatterInfoComponent  {
  @Input() team: Team;  // Team with batters
}
