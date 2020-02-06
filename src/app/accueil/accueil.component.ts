import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  showConnexion = false;
  showInscription = false;

  constructor() { }

  ngOnInit() { }

  connexion() {
    this.showConnexion = !this.showConnexion;
  }

  inscription() {
    this.showInscription = !this.showInscription;
  }
}
