# Angular Lifecycle Interfaces

Angular lifecycle interfaces allow developers to hook into different phases of a component or directive's lifecycle to 
perform specific actions.

---

## 1. **OnChanges** (`ngOnChanges`)
- **Purpose**: Responds to changes in input (`@Input()`) properties.
- **Method**: `ngOnChanges(changes: SimpleChanges)`
  - `changes`: An object of type `SimpleChanges` containing the current and previous values of the input properties.
- **When It's Called**:
  - When the component is initialized and an input property value changes.
  - Whenever an input property bound to the parent changes.
- **Use Case**: Monitor and react to changes in input properties.

---

## 2. **OnInit** (`ngOnInit`)
- **Purpose**: Initializes the component or directive after the first `ngOnChanges` is called.
- **Method**: `ngOnInit()`
- **When It's Called**:
  - Once, after the component’s data-bound properties are initialized.
- **Use Case**: Perform initialization logic, such as fetching data or setting up state.

---

## 3. **DoCheck** (`ngDoCheck`)
- **Purpose**: Custom change detection and state tracking.
- **Method**: `ngDoCheck()`
- **When It's Called**:
  - During every change detection run.
- **Use Case**: Implement custom logic to respond to changes not detected by Angular’s default change detection (e.g., changes in objects or arrays that Angular does not natively track).

---

## 4. **AfterContentInit** (`ngAfterContentInit`)
- **Purpose**: Responds after Angular projects external content into the component’s view via `<ng-content>`.
- **Method**: `ngAfterContentInit()`
- **When It's Called**:
  - Once, after Angular has projected external content for the first time.
- **Use Case**: Perform initialization that depends on the projected content.

---

## 5. **AfterContentChecked** (`ngAfterContentChecked`)
- **Purpose**: Responds after every check of the projected content.
- **Method**: `ngAfterContentChecked()`
- **When It's Called**:
  - After `ngAfterContentInit()` and during every subsequent change detection cycle.
- **Use Case**: Respond to changes in the projected content or its bindings.

---

## 6. **AfterViewInit** (`ngAfterViewInit`)
- **Purpose**: Responds after Angular initializes the component's views and child views.
- **Method**: `ngAfterViewInit()`
- **When It's Called**:
  - Once, after the component's view and child views are initialized.
- **Use Case**: Perform initialization that requires access to child components or the view DOM.

---

## 7. **AfterViewChecked** (`ngAfterViewChecked`)
- **Purpose**: Responds after every check of the component's views and child views.
- **Method**: `ngAfterViewChecked()`
- **When It's Called**:
  - After `ngAfterViewInit()` and during every subsequent change detection cycle.
- **Use Case**: Respond to changes in the view or child views.

---

## 8. **OnDestroy** (`ngOnDestroy`)
- **Purpose**: Cleanup logic before the component or directive is destroyed.
- **Method**: `ngOnDestroy()`
- **When It's Called**:
  - Just before Angular destroys the component or directive.
- **Use Case**: Unsubscribe from Observables, detach event handlers, release resources, etc.

---

## Summary Table

| Interface                | Method                 | Called When                                     |
|--------------------------|------------------------|------------------------------------------------|
| `OnChanges`              | `ngOnChanges`         | On input property changes                      |
| `OnInit`                 | `ngOnInit`            | After first `ngOnChanges`                     |
| `DoCheck`                | `ngDoCheck`           | During every change detection cycle            |
| `AfterContentInit`       | `ngAfterContentInit`  | After content projection initialized           |
| `AfterContentChecked`    | `ngAfterContentChecked`| After every content projection check           |
| `AfterViewInit`          | `ngAfterViewInit`     | After the component’s view is initialized      |
| `AfterViewChecked`       | `ngAfterViewChecked`  | After every view check                         |
| `OnDestroy`              | `ngOnDestroy`         | Before the component is destroyed              |

---

## Best Practices
- Avoid complex logic in lifecycle hooks to maintain performance and readability.
- Use `ngOnDestroy` for cleaning up subscriptions and other resources to prevent memory leaks.
- Use `ngDoCheck` cautiously; overuse can negatively impact performance.
