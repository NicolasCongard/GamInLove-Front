import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Geek} from '../_models/geek';
import {Recherche} from '../_models/recherche';
import {GeekService} from '../_services/geek/geek.service';
import { RechercheService} from '../_services/recherche/recherche.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  geeks: Observable<Geek[]>;
  geek: Geek = new Geek();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private geekService: GeekService,
              private rechercheService: RechercheService,
              ) {

  }

  ngOnInit() {
    this.reloadData();
    this.searchForm= this.fb.group( {
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
    this.rechercheService.searchGeek(recherche).subscribe(
      geekSearch => console.log(geekSearch)
    )
  }
}







