import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba1';
}

import axios from 'axios';

const chuckNorrisAPI = 'https://api.chucknorris.io/jokes/random';

axios.get(chuckNorrisAPI)
  .then(response => {
    console.log(response.data);
    // Aquí puedes procesar los datos recibidos de la API, como mostrarlos en la vista de Angular
  })
  .catch(error => {
    console.log(error);
  });

  import { Component } from '@angular/core';

import axios from 'axios';

@Component({
  selector: 'app-chuck-norris-joke',
  templateUrl: './chuck-norris-joke.component.html',
  styleUrls: ['./chuck-norris-joke.component.css']
})
export class ChuckNorrisJokeComponent {
  chuckNorrisAPI = 'https://api.chucknorris.io/jokes/random';
  joke: string;

  getJoke() {
    axios.get(this.chuckNorrisAPI)
      .then(response => {
        this.joke = response.data.value;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
<button (click)="getJoke()">Obtener broma</button>
<div>{{ joke }}</div>

