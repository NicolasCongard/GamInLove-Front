import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
  providers: [AuthService]
})
export class ConnexionComponent implements OnInit {

  isShow = false;
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  closePopIn() {
    this.isShow = !this.isShow;
  }

  login() {
    this.authService.login(this.model);
  }

}
