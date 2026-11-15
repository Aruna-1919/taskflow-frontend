import { DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Task, TaskService } from '../../../core/task.service';
import {
  PRIORITY_LABEL, STATUS_LABEL, isOverdue, priorityKey, statusKey
} from '../../../core/task-utils';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent implements OnInit {
  private taskService = inject(TaskService);

  readonly pageSize = 5;

  tasks = signal<Task[]>([]);
  loading = signal(true);
  error = signal('');

  // filter state
  search = signal('');
  statusFilter = signal('');
  priorityFilter = signal('');
  overdueOnly = signal(false);
  sortBy = signal<'dueDate' | 'priority' | 'title'>('dueDate');
  page = signal(0);

  filtered = computed(() => {
    const q = this.search().trim().toLowerCase();
    const order = { high: 0, medium: 1, low: 2 };

    const list = this.tasks().filter(t =>
      (!q || t.title.toLowerCase().includes(q)) &&
      (!this.statusFilter() || statusKey(t.status) === this.statusFilter()) &&
      (!this.priorityFilter() || priorityKey(t.priority) === this.priorityFilter()) &&
      (!this.overdueOnly() || isOverdue(t))
    );

    return list.sort((a, b) => {
      switch (this.sortBy()) {
        case 'priority': return order[priorityKey(a.priority)] - order[priorityKey(b.priority)];
        case 'title':    return a.title.localeCompare(b.title);
        default:         return (a.dueDate ?? '').localeCompare(b.dueDate ?? '');
      }
    });
  });

  totalCount = computed(() => this.filtered().length);
  paged = computed(() => {
    const start = this.page() * this.pageSize;
    return this.filtered().slice(start, start + this.pageSize);
  });
  rangeStart = computed(() => (this.totalCount() === 0 ? 0 : this.page() * this.pageSize + 1));
  rangeEnd = computed(() => Math.min((this.page() + 1) * this.pageSize, this.totalCount()));
  hasPrev = computed(() => this.page() > 0);
  hasNext = computed(() => this.rangeEnd() < this.totalCount());

  statusKey = statusKey;
  priorityKey = priorityKey;
  statusLabel = (s: string) => STATUS_LABEL[statusKey(s)];
  priorityLabel = (p: string) => PRIORITY_LABEL[priorityKey(p)];

  ngOnInit(): void {
    this.taskService.getAll().subscribe({
      next: data => { this.tasks.set(data); this.loading.set(false); },
      error: () => { this.error.set('Could not load tasks'); this.loading.set(false); }
    });
  }

  // each filter change goes back to the first page
  setSearch(v: string)   { this.search.set(v); this.page.set(0); }
  setStatus(v: string)   { this.statusFilter.set(v); this.page.set(0); }
  setPriority(v: string) { this.priorityFilter.set(v); this.page.set(0); }
  setOverdue(v: boolean) { this.overdueOnly.set(v); this.page.set(0); }
  setSort(v: string)     { this.sortBy.set(v as 'dueDate' | 'priority' | 'title'); this.page.set(0); }

  prev() { if (this.hasPrev()) this.page.update(p => p - 1); }
  next() { if (this.hasNext()) this.page.update(p => p + 1); }

  isOverdue = isOverdue;

  remove(task: Task): void {
    if (!confirm(`Delete "${task.title}"?`)) return;
    this.taskService.delete(task.id).subscribe({
      next: () => {
        this.tasks.update(list => list.filter(t => t.id !== task.id));
        if (this.paged().length === 0 && this.page() > 0) this.page.update(p => p - 1);
      },
      error: () => alert('Could not delete the task')
    });
  }
}