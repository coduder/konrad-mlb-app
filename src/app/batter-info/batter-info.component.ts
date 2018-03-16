import { Input, Component, OnInit } from '@angular/core';
import { Team } from '../models/team';

@Component({
  selector: 'app-batter-info',
  templateUrl: './batter-info.component.html',
  styleUrls: ['./batter-info.component.css']
})
export class BatterInfoComponent implements OnInit {
  @Input() team: Team;
  constructor() { }

  ngOnInit() {
  }

}
