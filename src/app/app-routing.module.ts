import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {TaskDetailComponent} from "./task-detail/task-detail.component";
import {LoginComponent} from "./login/login.component";
import {HistoryComponent} from "./history/history.component";


const routes: Routes = [
  {path: '', redirectTo: '/tasks', pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent},
  {path: 'task/:id', component: TaskDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: 'history', component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
