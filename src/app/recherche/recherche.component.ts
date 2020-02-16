import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Geek} from '../_models/geek';
import {Recherche} from '../_models/recherche';
import {GeekService} from '../_services/geek/geek.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  geeks: Observable<Geek[]>;
  geek: Geek = new Geek();

  private rechercheForm: FormGroup;
  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private geekService: GeekService,
              ) {

  }

  ngOnInit() {
    this.reloadData();
    this.rechercheForm = this.fb.group( {
      sexe:[''],
      ville:[''],
      ageMin:['18'],
      ageMax:['99'],
      jeu:[''],
    });
  }

  reloadData() {
    this.geeks = this.geekService.getAll();
  }

  onSubmit() {
    let recherche = new Recherche();
    recherche.sexe = this.searchForm.get('sexe').value;
    recherche.ville = this.searchForm.get('ville').value;
    recherche.ageMin = this.searchForm.get('ageMin').value;
    recherche.ageMax = this.searchForm.get('ageMax').value;
    recherche.jeu = this.searchForm.get('jeu').value;
   console.log(recherche.ville);
  }
}







