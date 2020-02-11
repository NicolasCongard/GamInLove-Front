import { Component, OnInit, Input } from '@angular/core';
import { GeekService } from '../_services/geek/geek.service';
import { Observable } from 'rxjs';
import { Geek } from '../_models/geek';
import { Router } from '@angular/router';
import {Photo} from '../_models/photo';
import {PhotoService} from '../_services/photo/photo.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
 // geek: Geek
  geeks: Observable<Geek[]>;
  geek: Geek = new Geek();
  submitted = false;
  /////////////////
  photos: Observable<any>;
  photo: Photo = new Photo();
  submitted2 = false;

  constructor(
    private geekService: GeekService, private photoService: PhotoService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
 reloadData() {
    this.geeks = this.geekService.getAll();

 //  this.photos = this.photoService.findOneAlbum(this.geek.photos);
  // console.log("photooooo :"+ this.photos[0]);
  }

}
