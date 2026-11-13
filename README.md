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