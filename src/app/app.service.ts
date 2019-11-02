import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  authenticated = false;

  private authUrl = 'api/user';
  private logoutUrl = 'api/logout';

  constructor(private http: HttpClient, private router: Router) {}

  authenticate(credentials, callback): void {
    const headers = AppService.createHeaders(credentials);

    this.http.get(this.authUrl, {headers: headers})
      .subscribe(response => {
        this.authenticated = !!response['name'];  // response['name'] ? true : false;

        return callback && callback();
      });
  }

  logout(): void {
    this.http.post(this.logoutUrl, {})
      .subscribe(() => {
        this.authenticated = false;
        this.router.navigateByUrl('/tasks');
      });
  }

  private static createHeaders(credentials): HttpHeaders {
    return new HttpHeaders(credentials
        ? {authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)}
        : {});
  }
}
