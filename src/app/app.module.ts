import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {FormsModule} from "@angular/forms";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import {Observable} from "rxjs";
import {AppService} from "./app.service";
import {XhrInterceptor} from "./XhrInterceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule, MatInputModule} from "@angular/material";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskDetailComponent,
    LoginComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatTabsModule
  ],
  providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
