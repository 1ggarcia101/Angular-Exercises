import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isForbidden = false;
  private isAuthenticated = false;
  private loggedInUser: string | null = null;

  login(username: string, password: string): boolean {
    if (username === 'gera' && password === 'qwer') {
      this.isAuthenticated = true;
      this.loggedInUser = username;
      localStorage.setItem('loggedInUser', username);
      return true;
    } else if (username === 'dani' && password === 'qwop') {
      this.isForbidden = true;
      this.isAuthenticated = true;
      this.loggedInUser = username;
      localStorage.setItem('loggedInUser', username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.isForbidden = false;
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  getLoggedInUser(): string | null {
    return this.loggedInUser;
  }
}
