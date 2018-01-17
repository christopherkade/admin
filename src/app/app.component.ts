import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-nav></app-nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.sass']
})
export class AppComponent {}
