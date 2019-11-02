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
    private router: Router,
    public dialog: MatDialog) {
    this.app.authenticate(undefined, undefined);
  }

  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(username => {
      if (username)
        console.log('Successfully signed in: ' + username);

      this.router.navigateByUrl('/');
    });
  }

  logout(): void {
    this.app.logout();
  }

  authenticated(): boolean {
    return this.app.authenticated;
  }
}
