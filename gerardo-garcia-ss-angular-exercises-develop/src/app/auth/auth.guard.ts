import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem('loggedInUser')) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      window.alert('You must be logged in to access this page');
      return false;
    }
  }
}
