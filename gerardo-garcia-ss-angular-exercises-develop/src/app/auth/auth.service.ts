import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;
  private loggedInUser: string | null = null;

  login(username: string): boolean {
    if (username === 'gera') {
      this.isAuthenticated = true;
      this.loggedInUser = username;
      localStorage.setItem('loggedInUser', username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
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
