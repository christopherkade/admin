import { Weather } from './../../model/weather';
import { WeatherService } from './../../service/weather.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.sass']
})
export class WeatherComponent implements OnInit {
  
  readonly tabs = [
    { title: 'Dublin', active: true, weather: new Weather() },
    { title: 'Paris', active: false, weather: new Weather() }
  ];
  selectedTab;  
  readonly dateObj = new Date();  
  readonly date = {
    dayString: this.dateObj.toLocaleString('en-us', {  weekday: 'long' }),
    monthString: this.dateObj.toLocaleString('en-us', { month: "long" }),
    dayNumber: this.dateObj.getDate(),
  };  
  
  constructor(private weatherService: WeatherService) { }
  
  ngOnInit() {
    // Select the first weather tab
    this.selectedTab = this.tabs[0];
    
    // For each tab, get its weather information and save it
    this.tabs.forEach(tab => {
      this.weatherService.getWeather(tab.title).subscribe(weather => {
        tab.weather.city = weather.location.name;
        tab.weather.lat = weather.location.lat;
        tab.weather.lon = weather.location.lon;
        tab.weather.temp_c = weather.current.temp_c;
        tab.weather.hum = weather.current.humidity;
        tab.weather.wind = weather.current.wind_kph;        
      });
    });
  }  
  
  /**
   * Change the selected tab to the one clicked by the user
   * @param tab clicked by the user
   */
  changeTab(tab: any) {
    this.selectedTab.active = false;
    this.selectedTab = tab;
    this.selectedTab.active = true;
  }
}
