# Sending HTTP Requests in Angular

## Introduction
In Angular, HTTP requests are handled using the `HttpClient` module, which provides an API for making requests to a backend service.

## 1. Register the HTTPClient in `providers`:
In this example, appConfig is being used to add HTTPClient to providers.

```typescript
import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(), 
  ]
};
```

## 2. Creating an HTTP Service
Create a service that handles all HTTP requests.

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = '...';

  private httpClient = inject(HttpClient);

  // GET Request
  getPosts(): Observable<any> {
    return this.httpClient.get(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // POST Request
  createPost(postData: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, postData).pipe(
      catchError(this.handleError)
    );
  }

  // DELETE Request
  deletePost(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Error Handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
```

## 3. Using the Service in a Component
To use the `ApiService` inside a component:

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];

  private apiService = inject(ApiService);

  ngOnInit(): void {
    this.apiService.getPosts().subscribe({
      next: (data) => this.posts = data,
      error: (err) => console.error('Error fetching posts:', err)
    });
  }
}
```

## 4. Utilizing RxJS Operators

`tap()` 
The `tap()` operator is used to perform side effects without modifying the stream.

`finalize()` 
The `finalize()` operator runs a callback when the observable completes or errors out.

`pipe()` 
The `pipe()` method is used to chain multiple operators.

## 5. Handling HTTP Interceptors
HTTP interceptors allow you to modify requests and responses globally, such as adding authentication tokens.

Create an interceptor:

```typescript
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer YOUR_ACCESS_TOKEN`
      }
    });
    return next.handle(clonedRequest);
  }
}
```

Register the interceptor in `providers`:

```typescript
import { HTTP_INTERCEPTORS } from '@angular/common/http';

providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
]
```
