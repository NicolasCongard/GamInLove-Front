import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth/auth.service'

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  onSignOut() {
    this.authService.signOutUser();
  }

}
