# User Management Angular Frontend

This is an Angular frontend application for managing users. It uses Axios to make HTTP requests to a .NET API and is GDPR compliant.

## Table of Contents

1. [Setup and Installation](#setup-and-installation)
2. [Folder Structure](#folder-structure)
3. [Running the Application](#running-the-application)
4. [GDPR Notice](#gdpr-notice)

## Setup and Installation

### Step 1: Install Angular CLI

If you don't have Angular CLI installed globally, install it first:

```bash
npm install -g @angular/cli
```

### Step 2: Create Angular Project
Create the Angular project:
```bash
ng new user-management-angular
cd user-management-angular
```
### Step 3:  Install Axios
Install Axios for handling HTTP requests:
```bash
npm install axios
```
### Step 4:  Folder Structure
```bash
src/app/
|-- models/
|   `-- user.model.ts       # User interface definition
|-- services/
|   `-- user.service.ts      # User service for API requests
|-- components/
    `-- user/
        |-- user.component.ts   # User component logic
        |-- user.component.html # User component template

```
### Step 5:  Running the Application
Inside your Angular project directory, run the following command to start the development server:
```bash
ng serve
```


