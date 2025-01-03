
#### Dialog Component (`dialog.component.ts`):

```javascript
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @Output() close = new EventEmitter<void>();

  inputText: string = '';

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    console.log('submitting', this.inputText);
    this.close.emit();
  }

}
```

#### Dialog Component (`dialog.component.html`):


```html
<div class="backdrop" (click)="onCancel()"></div>

<dialog open>
  <form (ngSubmit)="onSubmit()">
    <div class="dialog-content">
      <label for="inputText">Enter Text:</label>
      <input type="text" id="inputText" [(ngModel)]="inputText" name="inputText" required />
    </div>
    <div class="dialog-actions">
      <button type="submit">Submit</button>
      <button type="button" (click)="onCancel()">Cancel</button>
    </div>
  </form>
</dialog>
```

#### Application (Parent) Component (`app.component.html`):

```javascript
import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDiaglogActive: boolean = true;
  
  openDialog() {
    this.isDiaglogActive = true;
    console.log('Dialog opened', this.isDiaglogActive);
  }

  handleCancel() {
    this.isDiaglogActive = false;
  }
}
```

```html
@if (isDiaglogActive) {
  <app-dialog 
  (close)="handleCancel()">
  </app-dialog>
}
<main class="main">
  <button (click)="openDialog()">Open Dialog</button>
</main>
```
