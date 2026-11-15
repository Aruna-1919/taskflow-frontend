import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// what the backend returns (matches TaskResponse)
export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string;
  createdAt: string;
  categoryId: number | null;
  categoryName: string | null;
}

// what the frontend sends when creating or updating (matches TaskRequest)
export interface TaskRequest {
  title: string;
  description: string;
  status: string;
  priority: string;
  dueDate: string | null;
  categoryId: number | null;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private http = inject(HttpClient);
  private url = `${environment.apiUrl}/tasks`;

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  getOne(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  create(task: TaskRequest): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  update(id: number, task: TaskRequest): Observable<Task> {
    return this.http.put<Task>(`${this.url}/${id}`, task);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}