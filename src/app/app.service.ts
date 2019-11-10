import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {LoginComponent} from "./login/login.component";
import {MatDialog} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  private authUrl = 'api/user';
  private logoutUrl = 'api/logout';

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) {}

  authenticate(credentials, callback): void {
    const headers = AppService.createHeaders(credentials);

    this.http.get(this.authUrl, {headers: headers})
      .pipe(
        catchError(this.handleError<any>('Sign in'))
      ).subscribe(response => {
        this.authenticated = response && !!response['name'];  // response['name'] ? true : false;

        return callback && callback(this.authenticated);
      });
  }

  login(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '500px',
      disableClose: true,
      backdropClass: 'blurred-back'
    });
  }

  logout(): void {
    this.http.post(this.logoutUrl, {})
      .subscribe(() => {
        this.authenticated = false;
        this.router.navigateByUrl('/tasks');
        this.login();
      });
  }

  private static createHeaders(credentials): HttpHeaders {
    return new HttpHeaders(credentials
        ? {authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)}
        : {});
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Error: ');
      console.log(error);

      return of(result as T);
    }
  }
}
