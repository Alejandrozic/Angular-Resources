# Overview

---

## Types of Angular Directives

### 1. **Component Directives**
- Components are a special type of directive with a template and logic.
- Used to create reusable UI elements.
- Always associated with a selector (e.g., `<app-header>`).

**Example**:
  
```typescript
@Component({
  selector: 'app-header',
  template: `<h1>Welcome to Angular</h1>`
})
export class HeaderComponent {}
```

### 2. **Structural Directives**
- Change the structure of the DOM by adding, removing, or manipulating elements.
- Identified by the `*` prefix in templates (e.g., `*ngIf`, `*ngFor`) or `@` in angualr 17+ (`@for`, `@if`)

**ngFor, ngIf (Pre-Angular 17)**

```html
<div *ngFor="let item of items; let i = index">
  <div *ngIf="item.active; else inactive">
    Active: {{ i }} - {{ item.name }}
  </div>
  <ng-template #inactive>
    Inactive: {{ i }} - {{ item.name }}
  </ng-template>
</div>

```

**@for, @if (Angular 17+)**

```html
@for (let item of items; let i = index) {
  @if (item.active) {
    <div>Active: {{ i }} - {{ item.name }}</div>
  } @else {
    <div>Inactive: {{ i }} - {{ item.name }}</div>
  }
} @empty {
  <div>Empty!</div>
}
```

### 3. **Attribute Directives**
-  Modify the appearance or behavior of elements without changing the DOM structure.
- Applied like standard HTML attributes.

```html
<div [ngClass]="{'active': isActive}">
  Click Me!
</div>
```



## Attribute Directives

PLACEHOLDER
