import {Task} from "./Task";

export const TASKS: Task[] = [
  {id: 0, parent_task_id: null, performer: 0, status_id: 0, description: 'SomeVal'},
  {id: 1, parent_task_id: null, performer: 0, status_id: 0, description: 'SomeVal'},
  {id: 2, parent_task_id: 1, performer: 0, status_id: 1, description: 'SomeVal'},
  {id: 3, parent_task_id: 1, performer: 0, status_id: 1, description: 'SomeVal'},
  {id: 4, parent_task_id: null, performer: 0, status_id: 1, description: 'SomeVal'},
];
