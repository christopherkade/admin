import { GithubService } from './../service/github.service';
import { WeatherService } from './../service/weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { WeatherComponent } from './weather/weather.component';
import { LearningComponent } from './learning/learning.component';
import { ChartComponent } from './chart/chart.component';
import { PostComponent } from './post/post.component';
import { StarredComponent } from './starred/starred.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WeatherComponent,
    LearningComponent,
    ChartComponent,
    PostComponent,
    StarredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    WeatherService, 
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
