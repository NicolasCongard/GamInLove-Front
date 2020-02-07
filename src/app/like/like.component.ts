import { Component, OnInit } from '@angular/core';
import { Geek } from '../_models/geek';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
geek: Geek;
  constructor() { }

  ngOnInit() {
  }

}
