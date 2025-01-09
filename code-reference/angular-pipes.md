# Overview of Angular Pipes

Angular **pipes** are a feature in Angular used to transform data in templates. They are a simple way to format or manipulate the data before displaying it in 
the view without altering the actual data in the component. Pipes are widely used for common tasks such as formatting dates, numbers, currencies, and more.

---

## **How Pipes Work**
- Pipes are implemented as classes with a `transform` method.
- In templates, pipes are used with the `|` (pipe) operator.
- You can chain multiple pipes for complex transformations.

**Example:**
```html
<p>{{ user.name | uppercase }}</p>
<!-- Transforms 'user.name' to uppercase -->
```

---

## **Built-in Angular Pipes**
Angular provides a variety of built-in pipes for common tasks:

### **1. Formatting Pipes**
- **DatePipe**: Formats dates according to specified patterns.
  ```html
  {{ today | date:'shortDate' }}
  <!-- Output: 1/9/25 -->
  ```
- **CurrencyPipe**: Formats numbers as currency.
  ```html
  {{ price | currency:'USD' }}
  <!-- Output: $100.00 -->
  ```
- **DecimalPipe**: Formats numbers to a specific decimal precision.
  ```html
  {{ number | number:'1.2-2' }}
  <!-- Output: 123.46 -->
  ```

### **2. String Manipulation Pipes**
- **UppercasePipe**: Converts a string to uppercase.
- **LowercasePipe**: Converts a string to lowercase.
- **TitleCasePipe**: Converts text to title case.

### **3. Array Pipes**
- **SlicePipe**: Extracts a portion of an array or string.
  ```html
  {{ items | slice:1:3 }}
  <!-- Output: Second and third items -->
  ```

### **4. JSON Pipe**
- **JsonPipe**: Converts an object to a JSON string.
  ```html
  {{ data | json }}
  ```

---

## **Custom Pipes**
Developers can create custom pipes for specialized transformations.

### **Steps to Create a Custom Pipe**
1. Generate a pipe using Angular CLI:
   ```bash
   ng generate pipe custom
   ```
2. Define the `transform` method in the pipe class.

**Example: Custom Pipe (ExponentialPipe):**
```typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'exponential' })
export class ExponentialPipe implements PipeTransform {
  transform(value: number, exponent: number = 1): number {
    return Math.pow(value, exponent);
  }
}
```

**Usage:**
```html
<p>{{ 2 | exponential:3 }}</p>
<!-- Output: 8 -->
```

---

## **Advantages of Pipes**
- Clean templates: Reduce logic clutter in the HTML.
- Reusable: Centralized data transformation logic.
- Declarative: Easy to understand and apply in templates.

---

## **Limitations of Pipes**
- Pipes work well for display logic but not for handling complex logic.
- For performance, avoid using pipes with computationally heavy tasks in large lists.

---

Pipes are an essential tool in Angular for clean, efficient, and reusable data transformations.
