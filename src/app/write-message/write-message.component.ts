import { Component, OnInit } from '@angular/core';
import { Mp } from '../_models/mp';
import { Router } from '@angular/router';
import { MessageService } from '../_services/message/message.service';
import { Geek } from '../_models/geek';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.css']
})
export class WriteMessageComponent implements OnInit {

  geek: Geek;
  submitted = false;

  constructor(
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
  }

  saveMp(geekMP: Geek, geekCible: Geek, message: string) {
    this.messageService.addNew({ geekMP, geekCible, message } as Mp)
    .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/message']);
  }

}
