import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TaskListComponent } from './features/tasks/task-list/task-list.component';
import { TaskFormComponent } from './features/tasks/task-form/task-form.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { authGuard, guestGuard } from './core/auth.guard';

export const routes: Routes = [

  // public pages: logged-in users get redirected to the dashboard
  { path: 'login', component: LoginComponent, canActivate: [guestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [guestGuard] },

  // private pages: the guard on the parent protects ALL children
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'tasks', component: TaskListComponent },
      { path: 'tasks/new', component: TaskFormComponent },
      { path: 'tasks/:id/edit', component: TaskFormComponent },
    ],
  },

  { path: '**', component: NotFoundComponent },
];