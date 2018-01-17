import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  readonly api_key = '58655afd918845ea8b9164030181701';
  readonly ENDPOINT = 'https://api.apixu.com/v1/current.json?key=';
  
  constructor(private http: Http) { }

  public getWeather(city: string): Observable<any> {    
    const url = this.ENDPOINT + this.api_key + '&q=' + city;
    return this.http.get(url)
      .map(res => res.json());
  }
}
