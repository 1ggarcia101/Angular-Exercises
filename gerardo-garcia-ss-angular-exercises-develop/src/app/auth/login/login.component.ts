import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const formValues = this.loginForm.value;
      const loginSuccessful = this.authService.login(
        formValues.username,
        formValues.password
      );

      if (loginSuccessful) {
        // Display a successful login message using MatSnackBar
        this.snackBar.open('Login Successful!', 'Close', {
        });

        // Redirect to a protected route after successful login
        this.router.navigate(['/']);
      } else {
        this.loginError =
          'Authentication failed. Please check your credentials.';
      }
    } else {
      this.loginError = 'Please provide both username and password.';
    }
  }
}
