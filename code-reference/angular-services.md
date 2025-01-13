# Angular Services Overview

## **What are Angular Services?**

An Angular service is a TypeScript class that contains reusable logic or data that can be shared across components, directives, and other parts of an application. Services are commonly used to:
- Fetch data from APIs.
- Handle business logic.
- Maintain shared states (e.g., a shopping cart).
- Encapsulate logic for modularity and reusability.

---

## **Core Features**

1. **Dependency Injection (DI):**
   Angular uses dependency injection to provide services where needed. Services are registered with Angular's DI system and can be injected into components or other services.

2. **Scope:**
   Services typically have a singleton scope when provided in the `root` injector, meaning only one instance of the service exists across the app.

3. **Encapsulation:**
   Services encapsulate functionality and data, separating concerns and promoting modularity.

---

## **Creating and Using a Service**

### **Step 1: Create a Service**
You can generate a service using Angular CLI:
```bash
ng generate service my-service
```

This generates a `my-service.service.ts` file.

**Example:** A simple `LoggingService` to log messages.
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available globally
})
export class LoggingService {
  log(message: string): void {
    console.log(`LoggingService: ${message}`);
  }
}
```

---

### **Step 2: Use the Service in a Component**
Inject the service in a component and use it.

**Example:**
```typescript
import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  template: `<button (click)="logMessage()">Log Message</button>`,
})
export class AppComponent {
  constructor(private loggingService: LoggingService) {}

  logMessage(): void {
    this.loggingService.log('Button clicked!');
  }
}
```

---

### **Step 3: Use Services for Data Fetching**
Services often interact with HTTP APIs using Angular's `HttpClient`.

**Example:** A `DataService` to fetch users.
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
```

---

### **Step 4: Use the Service in a Component**
Fetch data and display it.

**Example:**
```typescript
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }}</li>
    </ul>
  `,
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
```

---

## **Service Scopes**

1. Module Injector
   - **` @Injectable({ providedIn: 'root' }) `**
   - Application-wide
   - Use when your application structure revolves around Angular modules

2. Environment Injector
   - **` bootstrapApplication(AppComponent, { providers: [...]}).catch((err) => console.error(err)); `**
   - Application-wide (environment specific)
   - Perfect for applications built with standalone components rather than NgModules

3. Element Injector
   - **` @Component({ providers: [...] })	 `**
   - Unique per-component
   - Caveat: Each instance of the component will have its own instance of the service

---

## **Best Practices**

1. Keep services focused and modular.
2. Use services to separate concerns (e.g., business logic, API interactions).
3. Avoid duplicating logic across components—encapsulate it in services.
4. Test services independently for better maintainability.

---
