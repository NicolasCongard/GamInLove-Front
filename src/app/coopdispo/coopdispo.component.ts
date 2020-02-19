import { Component, OnInit, Input } from '@angular/core';
import { LikeService } from '../_services/like/like.service';
import { Photo } from '../_models/photo';
import { Geek } from '../_models/geek';
import { ActionService } from '../_services/action/action.service';
import { Coop } from '../_models/coop';

@Component({
  selector: 'app-coopdispo',
  templateUrl: './coopdispo.component.html',
  styleUrls: ['./coopdispo.component.css']
})
export class CoopdispoComponent implements OnInit {

  @Input() geekPseudo: string;
  @Input() geekId: number;
  @Input() geek: Geek;
  photos: Photo[];

  constructor(
    private likeService: LikeService,
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.afficherPhoto();
  }

  afficherPhoto() {
    this.likeService.getById(this.geekId).subscribe(
      photos => this.photos = photos
    );
  }

  coop(geekCible: Geek) {
    const geekCoop = JSON.parse(window.sessionStorage.getItem('geek'));
    const id = geekCoop.id;
    this.actionService.addNew(id, {geekCoop, geekCible} as Coop)
      .subscribe(data => console.log(data), error => console.log(error));
  }
}
