import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  isShow = false;

  constructor() { }

  ngOnInit() {
  }

  closePopIn() {
    this.isShow = !this.isShow;
  }

}
