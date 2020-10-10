import {Component, OnInit} from '@angular/core';
import {Task} from "../Task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  columns = ['title', 'project', 'priority', 'status'];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
        for (let i = 0; i < this.tasks.length; i++) {
          this.tasks[i].projectId = 1;
        }
      });
  }

  createTask(): void {
  }
}
