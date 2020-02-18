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

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  geeks: Observable<Geek[]>;
  actions: Observable<Action[]>;
  photos: Photo[];
  geekPseudo: string;
  geekId: number;

  constructor(
    private geekService: GeekService,
    private likeService: LikeService,
    private actionService: ActionService,
    private rechercheService: RechercheService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.reloadData();
    this.route.queryParams.subscribe(params => console.log(params))
  }

  reloadData() {
    this.geeks = this.geekService.getAll();
    this.actions = this.actionService.getAll();
    const geek = JSON.parse(window.sessionStorage.getItem('geek'));
    this.geekId = geek.id;
    this.geekPseudo = geek.pseudo;
    let recherche = [];
    this.rechercheService.goLiker(recherche);
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
