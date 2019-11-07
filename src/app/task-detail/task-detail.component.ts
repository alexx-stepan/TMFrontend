import {Component, Input, OnInit} from '@angular/core';
import {Task} from "../Task";
import {ActivatedRoute} from "@angular/router";
import {TaskService} from "../task.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  /* @Input() */ task: Task;

  constructor(private route: ActivatedRoute,
              private taskService: TaskService,
              private location: Location) { }

  ngOnInit() {
    this.getTask();
  }

  private getTask() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.taskService.getTask(id)
      .subscribe(task => this.task = task);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.taskService.updateTask(this.task)
      .subscribe(() => this.goBack());
  }
}
