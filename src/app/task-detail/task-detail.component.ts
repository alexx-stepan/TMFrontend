import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../Task";
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../task.service";
import {Location} from "@angular/common";
import {TaskUpdate} from "../TaskUpdate";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  /* @Input() */ task: Task;
  taskUpdates: TaskUpdate[];

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private location: Location) { }

  ngOnInit() {
    this.getTask();
    this.getUpdates();
  }

  private getTask() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.taskService.getTask(id)
      .subscribe(task => this.task = task);
  }

  private getUpdates(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.taskService.getUpdates(id).subscribe(updates => this.taskUpdates = updates);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.taskService.updateTask(this.task)
      .subscribe(() => this.goBack());
  }
}
