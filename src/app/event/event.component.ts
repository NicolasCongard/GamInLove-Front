import { Component, OnInit, Input } from '@angular/core';
import { EventService } from '../_services/event/event.service';
import { Observable } from 'rxjs';
import { Event } from '../_models/event';
import { Router, ActivatedRoute } from '@angular/router';
import { Geek } from '../_models/geek';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Observable<Event[]>;
  event: Event = new Event();
  geek: Geek = new Geek();
  submitted = false;
  ids = [];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.events = this.eventService.getAll();
  }

  addParticipant(): void {
    this.submitted = false;
    this.event = new Event();
  }

  save(id: number, idGeek: number) {
    this.eventService.addParticipant(id, idGeek)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.gotoList();
  }

  onSubmit(form: NgForm) {
    const check = form.value;
    if (check === (':checked')) {
      this.ids.push(check.attr('event.id'));

    }
    console.log(this.ids);
    // const idGeek = 1;
    // this.eventService.addParticipant(id, idGeek)
    //   .subscribe(data => console.log(data), error => console.log(error));
    // this.event = new Event();
    // this.gotoList();
    // this.submitted = true;
    // this.save();
  }

  gotoList() {
    this.router.navigate(['/event']);
  }
}
