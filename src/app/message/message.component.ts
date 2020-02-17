import { Component, OnInit } from '@angular/core';
import { Mp } from '../_models/mp';
import { MessageService } from '../_services/message/message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  mps: Observable<Mp>;
  showReadMessage: number;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.displayMp();
  }

  displayMp() {
    const geek = JSON.parse(window.sessionStorage.getItem('geek'));
    const idGeek = geek.id;
    this.mps = this.messageService.getMpByGeek(idGeek);
  }

  readMp(index: number) {
    this.showReadMessage = index;
  }
}