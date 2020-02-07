import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../_services/event/event.service';
import { Observable } from 'rxjs';
import { Event } from '../_models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Observable<Event[]>;
  event: Event = new Event();
  submitted = false;

  constructor(
    private eventService: EventService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.events = this.eventService.getAll();
  }

  // addParticipant(): void {
  //   this.submitted = false;
  //   this.event = new Event();
  // }

  // save() {
  //   this.eventService.addParticipant(this.event.id, this.event.geekParticipant)
  //     .subscribe(data => console.log(data), error => console.log(error));
  //   this.event = new Event();
  //   this.gotoList();
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();
  // }

  // gotoList() {
  //   this.router.navigate(['/event']);
  // }
}
