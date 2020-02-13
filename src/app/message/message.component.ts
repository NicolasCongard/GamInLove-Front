import { Component, OnInit } from '@angular/core';
import { Mp } from '../_models/mp';
import { MessageService } from '../_services/message/message.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  mps: Observable<Mp>;
  showWriteMessage = false;
  showReadMessage = false;

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.displayMp();
  }

  displayMp() {
    // const id = +this.route.snapshot.paramMap.get('id');
    const id = 1;
    this.mps = this.messageService.getMpByGeek(id);
  }

  readMp() {
    this.showReadMessage = !this.showReadMessage;
  }

  messageDetails(id: number) {
    this.router.navigate(['message', id]);
  }
}