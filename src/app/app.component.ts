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
    const firebaseConfig = {
      apiKey: 'AIzaSyBC1Kc_M9Y9tKZ9KfZd9ivCqpZDmbvpI7s',
      authDomain: 'gaminlove-7312f.firebaseapp.com',
      databaseURL: 'https://gaminlove-7312f.firebaseio.com',
      projectId: 'gaminlove-7312f',
      storageBucket: 'gaminlove-7312f.appspot.com',
      messagingSenderId: '382779013044',
      appId: '1:382779013044:web:67cdcdaf3b611973a7a4e1',
      measurementId: 'G-6XP4R4PYRV'
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
