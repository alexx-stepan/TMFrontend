import { Injectable } from '@angular/core';
import {Task} from "./Task";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {TaskUpdate} from "./TaskUpdate";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'api/tasks/all';
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(
        catchError(this.handleError<Task[]>('getTasks', []))
      );
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`api/tasks/${id}`)
      .pipe(
        catchError(this.handleError<Task>(`getTask id=${id}`))
      )
  }

  getUpdates(id: number): Observable<TaskUpdate[]> {
    return this.http.get<TaskUpdate[]>(`api/tasks/updates/all/${id}`);
  }

  getProjectName(projectId: number): Observable<string> {
    return this.http.get(
      `api/tasks/projectname/${projectId}`,
      {
        responseType: 'text'
      });
  }

  getAssigneeName(employeeId: number): Observable<string> {
    return this.http.get(
      `api/tasks/assigneename/${employeeId}`,
      {
        responseType: 'text'
      });
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put('api/tasks', task, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateTask'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log('Error:');
      console.log(error);

      return of(result as T);
    }
  }
}
