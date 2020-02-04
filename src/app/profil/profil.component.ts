import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  providers: [AuthService]
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    console.log('Welcome home');
  }
  getLogin() {
    return this.authService.getUser().login;
  }

  logout() {
    return this.authService.logout();
  }


}
