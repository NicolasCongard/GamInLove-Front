import {Component, OnInit} from '@angular/core';
import {Geek} from '../_models/geek';
import {GeekService} from '../_services/geek/geek.service';
import {PhotoService} from '../_services/photo/photo.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {

  geeks: Observable<Geek[]>;
  geek: Geek = new Geek();

  constructor(
    private geekService: GeekService,
    private photoService: PhotoService,
    private router: Router) {
  }


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.geeks = this.geekService.getOne();
  }


}
