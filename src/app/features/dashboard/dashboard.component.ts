import { DatePipe } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { Task, TaskService } from '../../core/task.service';
import {
  PRIORITY_LABEL, STATUS_LABEL, isOverdue, priorityKey, statusKey
} from '../../core/task-utils';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  private taskService = inject(TaskService);
  private auth = inject(AuthService);

  tasks = signal<Task[]>([]);
  loading = signal(true);
  error = signal('');

  userName = this.auth.getUser()?.name ?? '';

  total = computed(() => this.tasks().length);
  pending = computed(() => this.tasks().filter(t => statusKey(t.status) === 'pending').length);
  inProgress = computed(() => this.tasks().filter(t => statusKey(t.status) === 'in-progress').length);
  completed = computed(() => this.tasks().filter(t => statusKey(t.status) === 'completed').length);
  overdue = computed(() => this.tasks().filter(isOverdue).length);
  recent = computed(() => this.tasks().slice(0, 4));

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
}