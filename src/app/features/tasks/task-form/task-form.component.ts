import { Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Category, CategoryService } from '../../../core/category.service';
import { TaskRequest, TaskService } from '../../../core/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private taskService = inject(TaskService);
  private categoryService = inject(CategoryService);

  taskId: number | null = null;          // null = create, number = edit
  categories = signal<Category[]>([]);
  loading = signal(false);
  saving = signal(false);
  error = signal('');

  // change these values if your backend uses different ones
  statuses = [
    { value: 'PENDING', label: 'Pending' },
    { value: 'IN_PROGRESS', label: 'In Progress' },
    { value: 'COMPLETED', label: 'Completed' }
  ];
  priorities = [
    { value: 'LOW', label: 'Low' },
    { value: 'MEDIUM', label: 'Medium' },
    { value: 'HIGH', label: 'High' }
  ];

  form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.maxLength(150)]],
    description: [''],
    status: ['PENDING', Validators.required],
    priority: ['MEDIUM', Validators.required],
    dueDate: [''],
    categoryId: [null as number | null]
  });

  get isEdit(): boolean {
    return this.taskId !== null;
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe({
      next: data => this.categories.set(data),
      error: () => this.categories.set([])
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskId = Number(id);
      this.loading.set(true);
      this.taskService.getOne(this.taskId).subscribe({
        next: t => {
          this.form.patchValue({
            title: t.title,
            description: t.description ?? '',
            status: t.status,
            priority: t.priority,
            dueDate: t.dueDate ? t.dueDate.slice(0, 10) : '',
            categoryId: t.categoryId
          });
          this.loading.set(false);
        },
        error: () => {
          this.error.set('Could not load this task');
          this.loading.set(false);
        }
      });
    }
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.saving.set(true);
    this.error.set('');

    const v = this.form.getRawValue();
    const body: TaskRequest = {
      title: v.title.trim(),
      description: v.description.trim(),
      status: v.status,
      priority: v.priority,
      dueDate: v.dueDate || null,
      categoryId: v.categoryId
    };

    const request$ = this.isEdit
      ? this.taskService.update(this.taskId!, body)
      : this.taskService.create(body);

    request$.subscribe({
      next: () => this.router.navigate(['/tasks']),
      error: () => {
        this.saving.set(false);
        this.error.set('Could not save the task. Please try again.');
      }
    });
  }
}