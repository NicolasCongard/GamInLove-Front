import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../_services/message/message.service';
import { Mp } from '../_models/mp';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.component.html',
  styleUrls: ['./read-message.component.css']
})
export class ReadMessageComponent implements OnInit {

  @Input() mp: Mp;
  @Input() idIndex: number;
  mps = this.messageService.getAll;

  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }
}