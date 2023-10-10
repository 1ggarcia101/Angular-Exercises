import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('Form submitted');

    if (this.loginForm.valid) {
      console.log('Form is valid');

      const formValues = this.loginForm.value;
      console.log('Username:', formValues.userName);

      if (this.authService.login(formValues.userName)) {
        console.log('Login Successful!');
        // Redirect to a protected route after successful login
        this.router.navigate(['/']);
        window.alert('Login Successful!');
      } else {
        console.log('Authentication failed');
      }
    } else {
      console.log('Form is not valid');
    }
  }
}
