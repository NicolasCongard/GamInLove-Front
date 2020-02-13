import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/event/event.service';
import { Observable } from 'rxjs';
import { Event } from '../_models/event';
import { Geek } from '../_models/geek';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Observable<Event[]>;
  geek: Geek = new Geek();
  submitted = false;

  constructor(
    private eventService: EventService
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
    if (event.target.checked) {
      const idGeek = 1;
      this.eventService.addParticipant(id, idGeek)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
