# Overview of Angular Bindings

**Angular Bindings** refer to the ways in which data and event handlers are communicated between the component class and its template. Angular supports various types of bindings to facilitate this interaction, ensuring that the user interface (UI) is synchronized with the application logic. These bindings allow the component's data and methods to be dynamically updated, reflecting the latest state in the view without manually manipulating the DOM.

Angular provides four main types of data bindings:
1. **Interpolation**
2. **Property Binding**
3. **Event Binding**
4. **Two-Way Binding**

Each of these bindings allows different kinds of interaction with the DOM and component data.

---

## 1. Interpolation (One-Way Data Binding)
- **Purpose**: Interpolation is used to bind data from the component class to the template, displaying dynamic data within the HTML.
- **Syntax**: `{{ expression }}`
- **Use Case**: Displaying data or properties from the component in the template.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>{{ title }}</p>
  `,
})
export class TestComponent {
  title: string = 'Hello Angular';
}
```

---

## 2. Property Binding (One-Way Data Binding)
- **Purpose**: Property binding binds an element property (e.g., `src`, `href`, `disabled`) to a component property.
- **Syntax**: `[property] = "expression"`
- **Use Case**: Dynamically changing element properties based on component data.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <img [src]="imageUrl" />
  `,
})
export class TestComponent {
  imageUrl: string = 'https://example.com/image.jpg';
}
```

---

## 3. Event Binding (One-Way Data Binding)
- **Purpose**: Event binding allows you to listen for user actions (e.g., clicks, mouse movements) and respond to them by executing methods defined in the component class.
- **Syntax**: `(event) = "expression"`
- **Use Case**: Handling user events, such as clicks or keypresses, to trigger methods in the component class.

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="onClick()">Click Me</button>
  `,
})
export class TestComponent {
    onClick() {
    console.log('Button clicked!');
  }
}
```

---
