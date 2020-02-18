import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Geek} from '../_models/geek';
import {Recherche} from '../_models/recherche';
import {GeekService} from '../_services/geek/geek.service';
import {RechercheService} from '../_services/recherche/recherche.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  geeks: Observable<Geek>;
  pseudos: string[] = [];
  geek: Geek = new Geek();

  searchForm: FormGroup;
  private recherche: Recherche;

  constructor(private fb: FormBuilder,
              private router: Router,
              private geekService: GeekService,
              private rechercheService: RechercheService,
  ) {

  }

  ngOnInit() {
    this.reloadData();
    this.searchForm = this.fb.group({
      sexe: [''],
      ville: [''],
      ageMin: ['18'],
      ageMax: ['99'],
      jeu: [''],
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
    this.rechercheService.searchGeek(recherche).subscribe(
      geekSearch => this.pseudos = geekSearch,
      error => console.log('error' + error)
    );
  }

  goLike() {
    let recherche = new Recherche();
    recherche.sexe = this.searchForm.get('sexe').value;
    recherche.ville = this.searchForm.get('ville').value;
    recherche.ageMin = this.searchForm.get('ageMin').value;
    recherche.ageMax = this.searchForm.get('ageMax').value;
    console.log(recherche);
    this.rechercheService.goLiker(this.recherche);


  }
}







