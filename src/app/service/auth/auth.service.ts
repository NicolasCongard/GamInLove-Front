import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    private router: Router,
  ) { }

  login(loginForm: any) {
    console.log('Tentative de connexion');

    this.setUser({ login: loginForm.username });
  }

  logout() {
    console.log('Tentative de déconnexion');

    this.clearUser();
    this.router.navigate(['']);
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  clearUser() {
    localStorage.removeItem('user');
  }
}