# Emitting Events Across Components in Angular

In Angular, **event emission** is a mechanism for communication between components. It allows data or actions from a child component to be sent 
to a parent component. This is typically achieved using `@Output` properties along with `EventEmitter`.

Using `@Output` and `EventEmitter`
In Angular, the most common way to emit events from a child component to a parent component is through the `@Output` decorator and the `EventEmitter` class.

## Example (child -> parent)


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
