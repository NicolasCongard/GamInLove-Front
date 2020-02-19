import { Component, OnInit } from '@angular/core';
import { GeekService } from '../_services/geek/geek.service';
import { Observable } from 'rxjs';
import { Geek } from '../_models/geek';
import { Photo } from '../_models/photo';
import { LikeService } from '../_services/like/like.service';
import { Action } from '../_models/action';
import { ActivatedRoute } from '@angular/router';
import { RechercheService } from '../_services/recherche/recherche.service';
import { Recherche } from '../_models/recherche';
import { ActionService } from '../_services/action/action.service';
import { RechercheComponent } from '../recherche/recherche.component';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  geeks: Observable<Geek[]>;
  actions: Observable<Action[]>;
  photos: Photo[];
  geekRecherche: Geek[] = [];
  geekPseudo: string;
  geekId: number;
  private recherche: RechercheComponent;

  constructor(
    private geekService: GeekService,
    private likeService: LikeService,
    private rechercheService: RechercheService,
    private actionService: ActionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.reloadData();
    let recherche = new Recherche();
    this.route.queryParams.subscribe(params => {
      recherche.sexe = params.sexe;
      recherche.ville = params.ville;
      recherche.ageMin = params.ageMin;
      recherche.ageMax = params.ageMax;
      console.log(recherche);
      this.rechercheService.searchGeek(recherche).subscribe(filtreGeek => this.geekRecherche = filtreGeek);
    });


  }

  reloadData() {
    this.geeks = this.geekService.getAll();
    this.actions = this.actionService.getAll();
    const geek = JSON.parse(window.sessionStorage.getItem('geek'));
    this.geekId = geek.id;
    this.geekPseudo = geek.pseudo;
    let recherche = [];
  }

  superlike(geekCible: Geek, typeAction: string) {
    const geekAction = JSON.parse(window.sessionStorage.getItem('geek'));
    this.likeService.addNew({ geekCible, geekAction, typeAction } as Action)
      .subscribe(data => console.log(data), error => console.log(error));
  }

  like(geekCible: Geek, typeAction: string) {
    const geekAction = JSON.parse(window.sessionStorage.getItem('geek'));
    this.likeService.addNew({ geekCible, geekAction, typeAction } as Action)
      .subscribe(data => console.log(data), error => console.log(error));
  }
}
