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

  events:Event[];
  geek: Geek = new Geek();
  submitted = false;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.eventService.getAll().subscribe(result => this.events = result);
  }

  onSubmit() {
    this.submitted = true;
  }

  onSelect(event, id: number) {
    if (event.target.checked) {
      const geek = JSON.parse(window.sessionStorage.getItem('geek'));
      const idGeek = geek.id;
      this.eventService.addParticipant(id, idGeek)
        .subscribe(data => console.log(data), error => console.log(error));
    }
  }
}
