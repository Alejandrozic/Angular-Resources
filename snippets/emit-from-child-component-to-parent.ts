////////////////////////////////////////
// Child TypeScript

import { Component, EventEmitter, Output } from '@angular/core';
...
export class ChildComponent {
  @Output() cancel =  new EventEmitter<string>();                         // <== 1

  onCancelBtn() {
    this.cancel.emit();                                                   // <== 2
  }
}

////////////////////////////////////////
// Child HTML

// <div class="backdrop" (click)="onCancelBtn()"></div>                  // <== 3.optional (click on backdrop will also cancel)
// <dialog open>
//     ...
//     <p class="actions">
//       <button type="button" (click)="onCancelBtn()">Cancel</button>    // <== 3
//     </p>
// </dialog>

////////////////////////////////////////
// Parent TypeScript

import { Component } from '@angular/core';
...
export class ParentComponent {
  isAddingTask: boolean = false;                                         // <== 4

  onCancelBtn() {
    this.isAddingTask = false;                                           // <== 5
  }

}

////////////////////////////////////////
// Parent HTML

// @if (isAddingTask) {
//   <app-new-task (cancel)="onCancelBtn()"/>                          // <== 6
// }
