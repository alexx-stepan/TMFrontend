export class Task {
  id: number;
  parent_task_id: Number;
  assignee_id: number;
  status: string;
  title: string;
  description: string;
  project: string; // Change to 'project_id'
  priority: string;
}
