import {Component, OnInit} from '@angular/core';
import {Geek} from '../_models/geek';
import {GeekService} from '../_services/geek/geek.service';
import {LikeService} from '../_services/like/like.service';
import {Photo} from '../_models/photo';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {

  geek: Geek = new Geek();
  photos: Photo[];

  constructor(
    private geekService: GeekService,
    private likeService: LikeService) {
  }


  ngOnInit() {
    this.geek = JSON.parse(window.sessionStorage.getItem('geek'));
  }
}
