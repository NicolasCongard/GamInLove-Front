import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event/event.service';
import { Observable } from 'rxjs';
import { Event } from '../_models/event';
import { Geek } from '../_models/geek';
import { GeekService } from '../_services/geek/geek.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Observable<Event[]>;
  idGeeks;
  geek: Geek = new Geek();
  submitted = false;

  constructor(
    private eventService: EventService,
    private geekService: GeekService
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.events = this.eventService.getAll();
    const email = JSON.parse(localStorage.getItem('email')).login;
    this.idGeeks = this.geekService.auth(email);
    console.log(idGeeks);
  }

  getLogin() {
    const email = JSON.parse(localStorage.getItem('email')).login;
    this.idGeeks = this.geekService.auth(email);
    return this.geekService.auth(email);
  }

  onSubmit() {
    this.submitted = true;
  }

  onSelect(event, id: number, idGeek: number) {
    if (event.target.checked) {
      // const idGeek = 1;
      this.eventService.addParticipant(id, idGeek)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
