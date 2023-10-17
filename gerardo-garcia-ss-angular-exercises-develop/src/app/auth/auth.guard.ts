import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  canActivate(): boolean {
    if (localStorage.getItem('loggedInUser')) {
      return true;
    } else {
      this.snackBar
        .open('You must be logged in to access this page', 'Login', {})
        .onAction()
        .subscribe(() => {
          this.router.navigate(['/auth/login']);
        });

      return false;
    }
  }
}
