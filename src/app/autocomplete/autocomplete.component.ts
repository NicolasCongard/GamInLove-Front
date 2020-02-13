import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocomplete } from '@angular/material';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  constructor() { }

  ngOnInit() {
  }

}
