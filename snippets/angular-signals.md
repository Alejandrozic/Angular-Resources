# Angular Signals

## Overview

**Signals** in Angular (introduced in Angular 16) are part of the reactivity model designed to handle state 
and change detection more efficiently. 

```typescript
import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>Current Count: {{ count() }}</p>
      <button (click)="increase()">Increase</button>
    </div>
  `,
})
export class CounterComponent {
  // Create a signal with an initial value of 0
  count = signal(0);

  // Method to increase the count
  increase() {
    this.count.set(this.count() + 1);
  }
}
```

## Computed Signals

A **computed** signal is a signal whose value is automatically recalculated whenever the signals it depends on change.

```typescript
const count = signal(0);
const doubleCount = computed(() => count() * 2);

console.log(doubleCount()); // Outputs: 0
count.set(2);
console.log(doubleCount()); // Outputs: 4
```

## Signal Effects

**Effects** are used to perform side effects based on signal changes.

### What Are Effects?
- **Purpose**: Automatically run logic whenever the value of a signal (or signals) changes.
- **Use Case**: For tasks such as logging, API calls, DOM manipulation, or triggering external processes when 
                a signal updates.

### How to Create an Effect

```typescript
import { effect } from '@angular/core';

const count = signal(0);
```

const myEffect = effect(() => {
  console.log(`Count changed: ${count()}`);
});

---
