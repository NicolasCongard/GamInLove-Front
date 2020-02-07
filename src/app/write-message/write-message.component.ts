import { Component, OnInit } from '@angular/core';
import { Mp } from '../_models/mp';
import { Router } from '@angular/router';
import { MessageService } from '../_services/message/message.service';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.css']
})
export class WriteMessageComponent implements OnInit {

  newMp: Mp = new Mp();
  mp: Mp;
  submitted = false;

  constructor(
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
  }

  newMP(): void {
    this.submitted = false;
    this.newMp = new Mp();
  }

  saveMp() {
    this.messageService.addNew(this.newMp)
      .subscribe(data => console.log(data), error => console.log(error));
    this.newMp = new Mp();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.saveMp();
  }

  gotoList() {
    this.router.navigate(['/message']);
  }

}
