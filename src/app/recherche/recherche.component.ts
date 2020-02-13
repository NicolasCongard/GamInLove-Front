import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Geek} from '../_models/geek';
import {Jeu} from '../_models/jeu';
import {GeekService} from '../_services/geek/geek.service';
import {PhotoService} from '../_services/photo/photo.service';
import {Router} from '@angular/router';
import {JeuService} from '../_services/jeu/jeu.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  jeux: Observable<Jeu[]>;
  jeu: Jeu = new Jeu();
  submitted = false;

  constructor(private jeuService: JeuService,
              private router: Router) {

  }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.jeux = this.jeuService.getAll();
  }
}
