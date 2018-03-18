import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamedaySummaryComponent } from './gameday-summary/gameday-summary.component';

import { MlbGameService } from './mlb-game.service';
import { GamedayDetailComponent } from './gameday-detail/gameday-detail.component';
import { BatterInfoComponent } from './batter-info/batter-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamedaySummaryComponent,
    GamedayDetailComponent,
    BatterInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'games/:date', component: GamedaySummaryComponent},
      { path: 'games/:date/:id', component: GamedayDetailComponent},
    ])
  ],
  providers: [
    MlbGameService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
