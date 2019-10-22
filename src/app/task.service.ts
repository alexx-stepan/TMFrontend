import { Injectable } from '@angular/core';
import {TASKS} from "./tasks";
import {Task} from "./Task";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'api/tasks/all';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTask(id: number): Observable<Task> {
    return of(TASKS.find(task => task.id === id));
  }
}
