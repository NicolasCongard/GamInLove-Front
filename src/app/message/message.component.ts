import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionService } from '../_services/action/action.service';
import { Action } from '../_models/action';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  actions: Observable<Action>;
  showReadMessage: number;

  constructor(
    private actionService: ActionService
  ) { }

  ngOnInit() {
    this.displayMp();
  }

  displayMp() {
    const geek = JSON.parse(window.sessionStorage.getItem('geek'));
    const idGeek = geek.id;
    this.actions = this.actionService.getActionByGeek(idGeek);
  }

  readMp(index: number) {
    this.showReadMessage = index;
  }
}