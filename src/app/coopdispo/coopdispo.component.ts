import { Component, OnInit, Input } from '@angular/core';
import { LikeService } from '../_services/like/like.service';
import { Photo } from '../_models/photo';

@Component({
  selector: 'app-coopdispo',
  templateUrl: './coopdispo.component.html',
  styleUrls: ['./coopdispo.component.css']
})
export class CoopdispoComponent implements OnInit {

  @Input() geekPseudo: string;
  @Input() geekId: number;
  photos: Photo[];

  constructor(
    private likeService: LikeService
  ) { }

  ngOnInit() {
    this.afficherPhoto();
  }

  afficherPhoto() {
    this.likeService.getById(this.geekId).subscribe(
      photos => this.photos = photos
    );
  }

}
