## Component Directives

PLACEHOLDER

## Structural Directives

### Iteration and Conditionals

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

## Attribute Directives

PLACEHOLDER
