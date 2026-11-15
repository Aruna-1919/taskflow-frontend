import { Task } from './task.service';

export type StatusKey = 'pending' | 'in-progress' | 'completed';
export type PriorityKey = 'low' | 'medium' | 'high';

export const STATUS_LABEL: Record<StatusKey, string> = {
  'pending': 'Pending',
  'in-progress': 'In Progress',
  'completed': 'Completed'
};

export const PRIORITY_LABEL: Record<PriorityKey, string> = {
  low: 'Low',
  medium: 'Medium',
  high: 'High'
};

// change the matching here if your backend uses different values
export function statusKey(status: string): StatusKey {
  const v = (status ?? '').toUpperCase().replace(/[\s-]/g, '_');
  if (v === 'IN_PROGRESS') return 'in-progress';
  if (v === 'COMPLETED' || v === 'DONE') return 'completed';
  return 'pending';
}

export function priorityKey(priority: string): PriorityKey {
  const v = (priority ?? '').toLowerCase();
  return v === 'high' ? 'high' : v === 'low' ? 'low' : 'medium';
}

export function isOverdue(task: Task): boolean {
  if (!task.dueDate || statusKey(task.status) === 'completed') return false;
  const today = new Date().toISOString().slice(0, 10);   // yyyy-MM-dd
  return task.dueDate.slice(0, 10) < today;
}