import { GithubService } from './../../service/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.sass']
})
export class StarredComponent implements OnInit {

  repos = [];

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getStarred()
    .subscribe(repos => {
      for (let i = 0; i < 5; i++) {
        this.repos.push(repos[i]);
      }
    });
  }

}
