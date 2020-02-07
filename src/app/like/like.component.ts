import { Component, OnInit, Input } from '@angular/core';
import { LikeService } from '../_services/like/like.service';
import { Observable } from 'rxjs';
import { Geek } from '../_models/geek';
import { Router } from '@angular/router';


@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  geeks: Observable<Geek[]>;
  geek: Geek = new Geek();
  submitted = false;

  constructor(
    private likeService: LikeService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
 reloadData() {
    this.geeks = this.likeService.getAll();
  }
}
