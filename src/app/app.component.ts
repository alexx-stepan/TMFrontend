import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task Management';

  links = [
    {name: 'Tasks', url: 'tasks'},
    {name: 'History', url: 'history'}
  ];

  activeLink = this.links[0].url;

  constructor(
    private app: AppService,
    private http: HttpClient,
    private router: Router) {

    this.app.authenticate(undefined, undefined);

    if (!this.authenticated())
      this.login();
  }

  login(): void {
    this.app.login();
  }

  logout(): void {
    this.app.logout();
  }

  authenticated(): boolean {
    return this.app.authenticated;
  }
}
