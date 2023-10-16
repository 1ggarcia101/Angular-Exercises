import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string | null = null; // To store login error message

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('Form submitted');

    if (this.loginForm.valid) {
      console.log('Form is valid');

      const formValues = this.loginForm.value;
      console.log('Username:', formValues.username);

      const loginSuccessful = this.authService.login(formValues.username, formValues.password);

      if (loginSuccessful) {
        console.log('Login Successful!');
        // Redirect to a protected route after successful login
        this.router.navigate(['/']);
        window.alert('Login Successful!');
      } else {
        console.log('Authentication failed');
        this.loginError = 'Authentication failed. Please check your credentials.';
      }
    } else {
      console.log('Form is not valid');
      this.loginError = 'Please provide both username and password.';
    }
  }
}
