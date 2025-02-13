# Template Driven Form

```typescript
import { afterNextRender, Component, DestroyRef, inject, viewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {

      const savedForm = window.localStorage.getItem('saved-login-form');
      if (savedForm){
        const loadedDataForm = JSON.parse(savedForm);
        const savedEmail = loadedDataForm.email;
        setTimeout( () => {
          this.form().controls['email'].setValue(savedEmail); // Update only email field
          // this.form().setValue({email: savedEmail}); // Update entire Form
        }, 1);
      }

      const subscription = this.form().valueChanges?.pipe(debounceTime(500)).subscribe({
        next: (value) => window.localStorage.setItem(
          'saved-login-form',
           JSON.stringify({email: value.email, password: ''})
          ),
      });
      this.destroyRef.onDestroy( () => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    if (formData.invalid) {
      return ;
    }
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;

    formData.reset();
  }
}
```

```html
<form #form="ngForm" (ngSubmit)="onSubmit(form)">
  <h2>Login</h2>

  <div class="control-row">
    <div class="control no-margin">
      <label for="email">Email</label>
      <input id="email" type="email" name="email" #email="ngModel" ngModel required email/>
    </div>

    <div class="control no-margin">
      <label for="password">Password</label>
      <input id="password" type="password" name="password" #password="ngModel" ngModel required minlength="6"/>
    </div>

    <button class="button">Login</button>
  </div>

  @if (email.touched && email.dirty && email.invalid){
    <p class="control-error"> Invalid email detected.</p>
  } 
  @if (password.touched && password.dirty && password.invalid){
    <p class="control-error"> Invalid password detected.</p>
  } 
</form>

```

# Reactive Driven Form
