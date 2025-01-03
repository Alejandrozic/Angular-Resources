# Angular Signal Effects

**Signals** in Angular (introduced in Angular 16) are part of the reactivity model designed to handle state 
and change detection more efficiently. **Effects** are used to perform side effects based on signal changes.

---

## What Are Effects?
- **Purpose**: Automatically run logic whenever the value of a signal (or signals) changes.
- **Use Case**: For tasks such as logging, API calls, DOM manipulation, or triggering external processes when 
                a signal updates.

---

## How to Create an Effect

```typescript
import { effect } from '@angular/core';

const count = signal(0);

const myEffect = effect(() => {
  console.log(`Count changed: ${count()}`);
});


# Common Use Cases for Angular Signal Effects

## 1. Logging

Debug signal updates to understand how the state changes:

```typescript
effect(() => console.log(signalValue()));
```

---

## 2. Trigger Side Effects

React to signal changes to perform UI updates, show alerts, or execute other imperative actions:

```typescript
effect(() => {
  if (count() > 5) {
    alert("Count exceeded 5!");
  }
});
```

---

## 3. Dynamic CSS or DOM Updates

Update DOM properties or apply styles dynamically:

```typescript
effect(() => {
  document.body.style.backgroundColor = count() > 10 ? "red" : "blue";
});
```
