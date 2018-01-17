import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  readonly ENDPOINT = 'https://api.github.com/users/christopherkade/starred';
  
  constructor(private http: Http) { }

  /**
   * Gets my most recently starred repositories
   */
  public getStarred(): Observable<any> {    
    return this.http.get(this.ENDPOINT)
      .map(res => res.json());
  }
}
