import { Component, OnInit, Input } from '@angular/core';
import { GeekService } from '../_services/geek/geek.service';
import { Observable } from 'rxjs';
import { Geek } from '../_models/geek';
import { Router } from '@angular/router';


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

  constructor(
    private geekService: GeekService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
 reloadData() {
    this.geeks = this.geekService.getAll();
  }

}
