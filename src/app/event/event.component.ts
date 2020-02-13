import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event/event.service';
import { Observable } from 'rxjs';
import { Event } from '../_models/event';
import { GeekService } from '../_services/geek/geek.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Observable<Event[]>;
  geeks;
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
  }

  onSubmit() {
    this.submitted = true;
  }

  onSelect(event, id: number) {
    const idGeek = JSON.parse(localStorage.getItem('id')).login;
    if (event.target.checked) {
      this.eventService.addParticipant(id, idGeek)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
