import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { LikeService } from '../_services/like/like.service';
import { Photo } from '../_models/photo';
import { Geek } from '../_models/geek';
import { ActionService } from '../_services/action/action.service';

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
  @Output() continue: EventEmitter<any> = new EventEmitter();

  constructor(
    private likeService: LikeService,
  ) { }

  ngOnInit() {
    this.afficherPhoto();
  }

  afficherPhoto() {
    this.likeService.getById(this.geekId).subscribe(
      photos => this.photos = photos
    );
  }

  validContinue() {
    this.continue.emit('true');
  }
}
