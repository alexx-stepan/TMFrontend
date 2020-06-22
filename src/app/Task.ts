export class Task {
  id: number;
  parentTaskId: number;
  assigneeId: number;
  status: string;
  title: string;
  description: string;
  projectId: number; // Change to 'project_id'
  priority: string;
}
