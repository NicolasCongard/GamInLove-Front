import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth/auth.service';
import * as firebase from 'firebase';
import { GeekService } from '../_services/geek/geek.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isAuth: boolean;
  geeks;

  constructor(
    private router: Router,
    private authService: AuthService,
    private geekService: GeekService,
  ) {
  }

  shouldShow() {
    return !(this.router.url === '/');
  }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }

  onSignOut() {
    this.authService.signOutUser();
  }

}

