import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GaminLove';

  constructor() {
    const config = {
      apiKey: 'AIzaSyCwfa_fKNCVrDMR1E88S79mpQP-6qertew4',
      authDomain: 'bookshelves-3d570.firebaseapp.com',
      databaseURL: 'https://bookshelves-3d570.firebaseio.com',
      projectId: 'bookshelves-3d570',
      storageBucket: 'bookshelves-3d570.appspot.com',
      messagingSenderId: '6634573823'
    };
    firebase.initializeApp(config);
  }
}