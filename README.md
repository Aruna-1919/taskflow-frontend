# TaskFlow – Frontend

A web-based Task Management Application developed using **Angular**. TaskFlow aims to provide a structured interface for users to manage their tasks efficiently.

## 🚀 Technologies Used

- Angular
- TypeScript
- HTML5
- SCSS / CSS
- Angular Router
- npm

## 📌 Day 1 – Development Progress

The initial frontend application structure and major UI components have been developed.

### 1. Application Structure
- Established the Angular application structure.
- Organized components using a feature-based folder structure.
- Configured application routing.
- Set up environment configuration files.

### 2. Authentication Module
- Created Login component.
- Created Registration component.
- Developed corresponding HTML and SCSS files.

### 3. Dashboard Module
- Created the Dashboard component.
- Established the initial dashboard page structure.

### 4. Task Management Module
- Created Task List component.
- Created Task Form component.
- Prepared the UI structure for task management operations.

### 5. Application Layout
- Created a reusable application layout.
- Developed Header component.
- Developed Sidebar component.
- Created Not Found (404) component.

### 6. Routing and Configuration
- Configured application routes.
- Organized development and production environment configuration files.

## 📂 Project Structure

```text
taskflow-frontend/
├── src/
│   ├── app/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   └── register/
│   │   │   ├── dashboard/
│   │   │   ├── tasks/
│   │   │   │   ├── task-form/
│   │   │   │   └── task-list/
│   │   │   └── not-found/
│   │   ├── layout/
│   │   │   ├── app-layout/
│   │   │   ├── header/
│   │   │   └── sidebar/
│   │   ├── app.routes.ts
│   │   ├── app.component.ts
│   │   └── app.component.html
│   └── environments/
├── angular.json
├── package.json
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites
- Node.js
- npm
- Angular CLI

### Steps

1. Clone the repository:

```bash
git clone https://github.com/Aruna-1919/taskflow-frontend.git
```

2. Navigate to the project directory:

```bash
cd taskflow-frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
ng serve
```

5. Open your browser:

```text
http://localhost:4200
```

## 🔗 Backend Integration

The frontend is designed to communicate with a separate Spring Boot backend through REST APIs.

Backend repository: Add your Spring Boot repository URL here.

## 🛣️ Development Roadmap

- [x] Initial Angular project structure
- [x] Authentication UI components
- [x] Dashboard component structure
- [x] Task form and task list components
- [x] Header and sidebar components
- [x] Application routing setup
- [ ] Complete authentication API integration
- [ ] Complete task CRUD API integration
- [ ] Backend connectivity and testing
- [ ] Production build and deployment

## 👩‍💻 Project Development

TaskFlow is being developed as a full-stack application using Angular and Spring Boot.

**Frontend:** Angular  
**Backend:** Spring Boot  
**Database:** To be finalized



## 📅 Day 2 – Authentication UI Development and Form Validation

**Objective:** Develop the Login and Registration interfaces for TaskFlow using Angular Reactive Forms and implement client-side form validation.

### 1. Login Component Development

Created the Login component to provide an interface for existing users to access the TaskFlow application.

**Implemented features:**
- Developed the Login form using Angular.
- Added email input field.
- Added password input field.
- Implemented required field validation.
- Implemented email format validation.
- Added form submission handling.
- Configured navigation to the Registration page for new users.

### 2. Registration Component Development

Created the Registration component to allow new users to enter their details through a structured registration form.

**Implemented form fields:**
- Full Name
- Email Address
- Password
- Re-enter Password

**Implemented validations:**
- Required field validation.
- Email format validation.
- Minimum password length validation.
- Password and confirmation password matching validation.
- Form submission validation to prevent invalid form submissions.

### 3. Angular Reactive Forms

Used Angular Reactive Forms to manage form controls and validation.

Implemented:
- `FormBuilder` for form creation.
- `FormGroup` for managing form controls.
- `Validators` for field-level validation.
- Custom password matching validator for Registration.
- Form validity checks before submission.
- Validation error handling.

### 4. Navigation and Routing

Configured navigation between authentication pages.

- Added navigation from Login to Registration.
- Added navigation from Registration to Login.
- Used Angular Router for page navigation.

### 5. Authentication Workflow – Current Implementation

Developed the initial frontend authentication interface with client-side validation.

**Current functionality:**
- Users can enter their login credentials.
- New users can enter their registration details.
- Form inputs are validated before submission.
- Password confirmation is checked on the frontend.
- Invalid forms are prevented from being submitted.

**Current limitation:**

User details are not yet stored in the database. Login and Registration are currently frontend implementations without backend authentication API integration.

Backend authentication, user registration persistence, password hashing and authorization will be implemented in upcoming development milestones.

### 6. Technologies Used

- Angular
- TypeScript
- HTML5
- SCSS
- Angular Reactive Forms
- Angular Router

### 📂 Components Developed

```text
src/app/features/auth/
├── login/
│   ├── login.component.ts
│   ├── login.component.html
│   ├── login.component.scss
│   └── login.component.spec.ts
│
└── register/
    ├── register.component.ts
    ├── register.component.html
    ├── register.component.scss
    └── register.component.spec.ts
```

### 🎯 Day 2 Key Achievements

- [x] Created Login component.
- [x] Created Registration component.
- [x] Designed Login form.
- [x] Designed Registration form.
- [x] Implemented Reactive Forms.
- [x] Added required field validations.
- [x] Implemented email validation.
- [x] Implemented password validation.
- [x] Implemented password confirmation matching.
- [x] Configured Login and Registration navigation.
- [ ] Integrate Login API with Spring Boot.
- [ ] Integrate Registration API with Spring Boot.
- [ ] Save registered user details in PostgreSQL.
- [ ] Implement secure authentication and authorization.

**Day 2 Status:** Login and Registration UI development completed with client-side form validation. Backend authentication and database integration are pending.




## 📅 Day 3 – Angular Authentication, Route Protection & UI Redesign

**Objective:** Connect the TaskFlow Angular frontend to the secured Spring Boot backend. Implement login and register screens wired to the authentication APIs, store the JWT in the browser, attach it to every API request through an HTTP interceptor, protect private pages with route guards, and redesign the dashboard, task list, sidebar and auth pages so each user sees only their own tasks.

---

## 🧰 Tech Stack (Frontend)

- Angular (standalone components, signals, new control flow `@if` / `@for`)
- TypeScript, RxJS
- Reactive Forms
- SCSS (shared styles in `styles.scss`, Inter font)
- Angular Router with functional guards and a functional HTTP interceptor

---

## ✅ What Was Built Today

| Area | Work done |
|------|-----------|
| Authentication | `AuthService` for register, login, logout and token storage |
| Security | `authInterceptor` (adds the JWT header, handles 401), `authGuard` and `guestGuard` |
| Routing | Public routes (login, register), private routes inside `AppLayoutComponent` protected by one guard |
| Pages | Login, Register, Dashboard, My Tasks (search, filters, sort, pagination), Task form (create and edit) |
| Layout | New dark sidebar with active link highlight, user info and Log out |
| Data layer | `TaskService`, `CategoryService`, shared helpers in `task-utils.ts` |
| Bug fixed | A newly registered user was seeing another user's tasks. Cause: the backend query matched the **task id** instead of the **user id**. Fixed with `findByUserId`. |

---

## 📁 Folder Structure

```
src/
├── environments/
│   └── environment.ts              apiUrl: 'http://localhost:8080/api'
├── app/
│   ├── core/                       app-wide logic, no UI
│   │   ├── auth.service.ts         register, login, logout, token storage
│   │   ├── auth.interceptor.ts     adds Authorization header, handles 401
│   │   ├── auth.guard.ts           authGuard and guestGuard
│   │   ├── task.service.ts         Task and TaskRequest types, CRUD calls
│   │   ├── category.service.ts     loads categories for the form dropdown
│   │   └── task-utils.ts           status/priority labels and overdue check
│   │
│   ├── features/
│   │   ├── auth/
│   │   │   ├── login/              login page
│   │   │   └── register/           register page
│   │   ├── dashboard/              stats cards and recent tasks
│   │   ├── tasks/
│   │   │   ├── task-list/          My Tasks table with filters and pagination
│   │   │   └── task-form/          create and edit form
│   │   └── not-found/              404 page
│   │
│   ├── layout/
│   │   ├── app-layout/             sidebar + router outlet shell
│   │   ├── sidebar/                navigation, user info, Log out
│   │   └── header/                 (no longer used in the layout)
│   │
│   ├── app.component.ts / .html    root component, only <router-outlet />
│   ├── app.config.ts               provideRouter + provideHttpClient(withInterceptors)
│   └── app.routes.ts               routes and guards
├── styles.scss                     global styles, badges, buttons, auth pages
├── index.html
└── main.ts
```

---

## 🔐 Authentication Flow (Angular Side)

**Register:** register form submit → `AuthService.register()` → `POST /auth/register` (the interceptor does not attach a token) → backend saves the user → redirect to `/login`.

**Login:** login form submit → `AuthService.login()` → `POST /auth/login` (no token attached) → backend returns `{ token, user }` → `AuthService` saves both in `localStorage` → redirect to `/dashboard`.

**Other APIs (tasks, categories):** component calls `TaskService` → the interceptor reads the token from `localStorage` and adds `Authorization: Bearer <token>` → backend validates it and returns the user's data → component renders it.

**Opening a private page:** route `/dashboard` → `authGuard` checks `isLoggedIn()` → token exists: page opens, otherwise redirect to `/login`.

**Token expired or invalid:** backend returns 401 → interceptor catches it → `AuthService.logout()` removes the token → redirect to `/login`.

**Logout:** sidebar Log out button → `AuthService.logout()` removes the token and user from `localStorage` → redirect to `/login`.

```
LOGIN/REGISTER:  form -> AuthService -> (no token header) -> backend -> response -> save token -> dashboard
OTHER APIs:      component -> TaskService -> interceptor adds Bearer token -> backend -> data -> screen
```

### Where the token lives

| Stage | Location |
|-------|----------|
| Created | Backend (`JwtService`), sent in the login response body |
| Stored | Browser `localStorage` (`taskflow_token`, plus `taskflow_user` for the name and email) |
| Sent | `Authorization: Bearer <token>` header on every protected request |
| Removed | On logout or on a 401 response |

`localStorage` is simple and survives a page refresh. Its trade-off is that JavaScript can read it, so an XSS attack could steal the token. Moving to an httpOnly cookie is a possible later improvement.

---

## 🧩 Key Files Explained

### `auth.interceptor.ts`
A functional interceptor registered once in `app.config.ts`:

```ts
provideHttpClient(withInterceptors([authInterceptor]))
```

- `req` is the outgoing request created by `HttpClient`. `next` passes it on to the next step (the network).
- Requests are immutable, so the interceptor clones `req` with the new header and returns `next(clonedReq)`.
- URLs containing `/auth/` are skipped, so a wrong password on the login form shows an error instead of triggering a logout.
- A 401 on any other request clears the session and redirects to login.

### `auth.guard.ts`
- `authGuard`: allows the route only if a token exists, otherwise redirects to `/login`.
- `guestGuard`: keeps logged-in users away from `/login` and `/register`.

### `task.service.ts`
Holds the `Task` (response) and `TaskRequest` (payload) interfaces and the calls: `getAll`, `getOne`, `create`, `update`, `delete`. It contains no token code, because the interceptor handles that.

### `task-utils.ts`
Maps backend values to UI values (`PENDING`, `IN_PROGRESS`, `COMPLETED` to labels and badge classes) and calculates whether a task is overdue.

---

## 🗺️ Routes

| Path | Component | Guard |
|------|-----------|-------|
| `/login` | `LoginComponent` | `guestGuard` |
| `/register` | `RegisterComponent` | `guestGuard` |
| `/dashboard` | `DashboardComponent` | `authGuard` (via layout) |
| `/tasks` | `TaskListComponent` | `authGuard` (via layout) |
| `/tasks/new` | `TaskFormComponent` | `authGuard` (via layout) |
| `/tasks/:id/edit` | `TaskFormComponent` | `authGuard` (via layout) |
| `**` | `NotFoundComponent` | none |

The guard is placed on the parent layout route, so every child route is protected in one place.

---

## 🖥️ Screens

- **Login and Register:** split layout with a dark brand panel and a form card, field-level validation messages, a red banner for server errors, and a loading state on the button. The brand panel hides on small screens.
- **Dashboard:** welcome message, stat cards (Total, Pending, In Progress, Completed, Overdue) and the four most recent tasks.
- **My Tasks:** table with search by title, status filter, priority filter, overdue-only checkbox, sort (due date, priority, title), pagination (5 per page) and Edit and Delete actions. Filtering, sorting and paging run in the browser for now.
- **Task form:** one component used for both create and edit. It loads the task for editing, loads categories for the dropdown, and sends `null` for an empty due date or category.
- **Sidebar:** dark 220px navigation with active link highlight, user avatar, name and email, and Log out pinned to the bottom. It collapses to a top bar on small screens.

---

## ▶️ Running the Frontend

1. Start the backend first (with the `JWT_SECRET` environment variable set) on `http://localhost:8080`.
2. Install and run:

   ```bash
   npm install
   ng serve
   ```

3. Open `http://localhost:4200`.
4. The API URL is set in `src/environments/environment.ts`.

---

## 🧪 Testing Checklist

| Test | Expected |
|------|----------|
| Open `/dashboard` while logged out | Redirected to `/login` |
| Register a new user | Redirected to login, user visible in the database |
| Log in with correct details | Dashboard opens, `taskflow_token` present in Local Storage |
| Log in with a wrong password | Error message on the form, no redirect |
| Network tab on the tasks request | `Authorization: Bearer ...` header present |
| Refresh the page while logged in | Still logged in |
| Log in as a second user | Sees only their own tasks |
| Log out | Token removed, redirected to `/login` |
| Open `/login` while logged in | Redirected to `/dashboard` |

---

## 🐞 Issues Faced and Fixes

| Problem | Cause | Fix |
|---------|-------|-----|
| `Cannot find module 'src/app/core'` | Import pointed to a folder instead of a file | Use a relative path to the file, e.g. `'../../../core/auth.service'` |
| New user saw another user's tasks | Backend used `findById(userId)`, which matches the task id | Use `findByUserId(userId)` in the repository and service |
| Two headers on the dashboard | Placeholder navbar left in the dashboard template | Removed it, since the layout already provides navigation |
| Purple buttons clashing with the theme | Global `button` rule from earlier styles | Replaced global rules with scoped `.btn-primary` and component styles |
| Sidebar Log out did nothing | Link had no click handler, and a plain navigation leaves the token in storage | Button that calls `AuthService.logout()` |

---

## ⚠️ Known Issues / Pending

- Create task, edit task and delete task screens are built but still need full end-to-end testing against the backend.
- Edit depends on the backend `GET /api/tasks/{id}` and `PUT /api/tasks/{id}` endpoints, which are still being fixed.
- Backend error responses are not fully shaped yet (wrong password or duplicate email may not return 401 or 409), so some form errors fall back to a generic message.

---

## ⏭️ Next Steps

- Finish and test create, edit and delete against the backend.
- Show success and error messages (toasts) after saving or deleting.
- Category management screen.
- Move filtering, sorting and pagination to the server.
- Unit tests for the auth service, interceptor and guards.
- Deployment setup.


# Day 4 – Frontend: Logout, Session Handling and Error States

**Date:** 16 Nov 2026 | **Focus:** fix auth-related bugs and make failures visible to the user

## Summary

Fixed the sidebar logout, added automatic handling of expired sessions, and added loading and error states so API failures no longer leave a blank screen.

## Changes Made

- **Sidebar Log out fixed:** clears the token and user info, navigates to `/login`, and the route guard now blocks protected pages afterwards
- **401 handling in the HTTP interceptor:** an expired or invalid token logs the user out and redirects to login
- **Loading and error states** on the dashboard and login pages
- Verified the frontend works with the fixed backend endpoints (get, update, delete by id)

## How It Works

1. The auth interceptor attaches `Authorization: Bearer <token>` to every request.
2. If the API responds with **401**, the interceptor clears the session and sends the user to `/login`.
3. Logging out removes the stored token and user data, so the guard rejects protected routes.
4. Components show a loading indicator while a request is in flight and a readable message when it fails (the backend now returns `{ "error": "..." }`).

## How to Test

1. Log in and open the dashboard.
2. Click **Log out**, then press the browser back button. You should land on `/login`.
3. Log in again, delete the token from browser storage and reload a protected page. You should be redirected to login.
4. Stop the backend and reload the dashboard. An error message should appear instead of a blank page.
5. Log in as a second user and confirm you only see your own tasks.

## What I Learned

- HTTP interceptors are the right place for cross-cutting concerns like auth headers and 401 handling.
- Guards only protect navigation. Always clear the session fully on logout.
- RxJS `catchError` and `finalize` make loading and error handling clean.
- Consistent backend error JSON makes frontend error handling much simpler.



# TaskFlow Frontend: Deployment

Angular app deployed on **Netlify**, calling the Spring Boot API hosted on Render.

- Live app: https://taskfloooow.netlify.app
- API: https://taskflow-backend-dar5.onrender.com

## How I deployed it

### 1. Point the app at the live API
In the production `src/environments/environment.ts`:

```ts
export const environment = {
  production: true,
  apiUrl: 'https://taskflow-backend-dar5.onrender.com'
};
```

### 2. Add the routing fallback
Created a `_redirects` file so refreshing on routes like `/dashboard` doesn't return a 404:

```
/*  /index.html  200
```

### 3. Check the build locally
Ran `ng build` to confirm it completes without errors.

### 4. Push to GitHub
Committed the code. `dist/` and `node_modules/` are git-ignored, because Netlify builds the app itself.

### 5. Deploy on Netlify
1. Netlify, **Add new site**, **Import an existing project**, and selected this repository.
2. Build command: `ng build`
3. Publish directory: `dist/<project-name>/browser`
4. Clicked **Deploy** and received the live URL.

### 6. Allow the site in the backend
Copied the Netlify URL into the `CORS_ALLOWED_ORIGINS` variable on Render, then waited for the backend to redeploy.

### 7. Test the live site
Registered, logged in, created, edited and deleted tasks, and refreshed on a route to confirm the fallback works.

> The backend runs on a free Render instance that sleeps when idle, so the first request can take up to a minute.