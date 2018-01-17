import { WeatherService } from './../../service/weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
  
  weather: any = {
    city: 'Loading...',
    country: 'Loading...',
    description: 'Loading...',
    lat: 0,
    lon: 0,
    temp_c: 0,
    hum: 0,
    wind: 0
  };
  readonly dateObj = new Date();  
  readonly date = {
    dayString: this.dateObj.toLocaleString('en-us', {  weekday: 'long' }),
    dayNumber: this.dateObj.getDate(),
    monthString: this.dateObj.toLocaleString('en-us', { month: "long" }),
  };  
  
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit() {
    this.weatherService.getWeather('Dublin')
    .subscribe(weather => {
      this.weather.city = weather.location.name;
      this.weather.country = weather.location.country;
      this.weather.lat = weather.location.lat;
      this.weather.lon = weather.location.lon;
      this.weather.temp_c = weather.current.temp_c;            
      this.weather.hum = weather.current.humidity;
      this.weather.wind = weather.current.wind_kph;
    });
  }  
}
