# Emitting Events Across Components in Angular

In Angular, **event emission** is a mechanism for communication between components. It allows data or actions from a child component to be sent 
to a parent component. This is typically achieved using `@Output` properties along with `EventEmitter`.

Using `@Output` and `EventEmitter`

In Angular, the most common way to emit events from a child component to a parent component is through the `@Output` decorator and the `EventEmitter` class.

## Example (child -> parent)

1. **In the Child Component:**
   - You define an `@Output` property that holds an instance of `EventEmitter`.
   - This emitter will trigger events that the parent can listen to.
   - The `EventEmitter.emit()` method is called when the event is triggered.

2. **In the Parent Component:**
   - You use the child component in the parent template.
   - You listen to the emitted event using Angular's event binding syntax (`(eventName)`).

#### Child Component (`child.component.ts`):
```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<button (click)="sendMessage()">Send Message</button>`
})
export class ChildComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Hello from Child!');
  }
```

#### Parent Component (`parent.component.ts`):
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child (messageEvent)="receiveMessage($event)"></app-child>
             <p>{{ message }}</p>`
})
export class ParentComponent {
  message: string;

  receiveMessage(message: string) {
    this.message = message; // Handle the message received from child
  }
}
```

## Example (childA -> parent -> childB)

1. Scenario
- ChildA Component emits an event to the parent when a button is clicked.
- The parent component receives the event and then sends the data to another childB component, which displays it.

2. Steps:
- **ChildAComponent** emits an event to the parent.
- **ParentComponent** listens to the event from `ChildAComponent` and passes the data to `ChildBComponent`.
- **ChildBComponent** receives and displays the data passed from the parent.

### Child Component A (`childa.component.ts`):

```typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childa',
  template: `<button (click)="sendMessage()">Send to Parent</button>`
})
export class ChildAComponent {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    this.messageEvent.emit('Data from Child A');
  }
}
```

### Parent Component (`parent.component.ts`):

```typescript
import { Component } from '@angular/core';
import { ChildAComponent } from './childa.component';
import { ChildBComponent } from './childb.component';

@Component({
  selector: 'app-parent',
  imports: [ChildAComponent, ChildBComponent],
  template: `
    <app-childa (messageEvent)="receiveMessage($event)"></app-childa>
    <app-childb [receivedMessage]="message"></app-childb>
  `
})
export class ParentComponent {
  message?: string;

  receiveMessage(message: string) {
    this.message = message; // Receive data from ChildA and store it in `message`
  }
}
```

### Child Component B (`childb.component.ts`):

```typescript
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childb',
  template: `<p>Received message: {{ receivedMessage }}</p>`
})
export class ChildBComponent {
  @Input() receivedMessage?: string;
}
```
