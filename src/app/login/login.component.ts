import {Component, Inject, OnInit} from '@angular/core';
import {AppService} from "../app.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {username: '', password: ''};
  error = false;

  constructor(
    private app: AppService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  login(): void {
    this.app.authenticate(this.credentials, authenticated => {
      if (!authenticated)
        this.error = true;
      else
        this.dialogRef.close();
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  authenticated(): boolean {
    return this.app.authenticated;
  }
}

export interface LoginData {
  username: string;
  password: string;
}
