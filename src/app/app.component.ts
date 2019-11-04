import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material";
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task Management';

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
