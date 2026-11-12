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

