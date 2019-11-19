export class TaskUpdate {
  relatedTaskId: number;
  message: string;
  oldStatus: string;
  newStatus: string;
  oldAssigneeId: number;
  newAssigneeId: number;
  oldPriority: string;
  newPriority: string;
  updatePerformerId: number;
}
