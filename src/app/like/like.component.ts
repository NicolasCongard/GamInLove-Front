import { Component, OnInit } from '@angular/core';
import { GeekService } from '../_services/geek/geek.service';
import { Observable } from 'rxjs';
import { Geek } from '../_models/geek';
import { Photo } from '../_models/photo';
import { LikeService } from '../_services/like/like.service';
import { Action } from '../_models/action';
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
  geekPseudo;
  geekId;

  constructor(
    private geekService: GeekService,
    private likeService: LikeService,
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.geeks = this.geekService.getAll();
    this.actions = this.actionService.getAll();
    const geek = JSON.parse(window.sessionStorage.getItem('geek'));
    this.geekPseudo = geek.pseudo;
    this.geekId = geek.id;
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
