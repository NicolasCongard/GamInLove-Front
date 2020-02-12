import { Component, OnInit, Input } from '@angular/core';
import { Mp } from '../_models/mp';
import { MessageService } from '../_services/message/message.service';
import { Router } from '@angular/router';
import { Geek } from '../_models/geek';

@Component({
  selector: 'app-read-message',
  templateUrl: './read-message.component.html',
  styleUrls: ['./read-message.component.css']
})
export class ReadMessageComponent implements OnInit {

  @Input() mp: Mp;
  mps;
  geek: Geek;
  submitted = false

  constructor(
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.mps = this.messageService.getAllMP(1, this.mp.geekCible.id);
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