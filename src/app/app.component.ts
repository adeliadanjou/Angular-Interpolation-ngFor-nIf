import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation';
  message: string = "Esto es una interpolation :)";

  animals: Array<string> = ['Dog', 'Cat', 'Bird', 'Lion'];

  persons: Array<Object> = [
    {
      id: 1,
      category: 'mammal',
      name: 'Felicia'
    }, {
      id: 2,
      category: 'oviparous',
      name: 'Paco'
    }, {
      id: 3,
      category: 'mammal',
      name: 'Marta'
    }, {
      id: 4,
      category: 'reptile',
      name: 'Naiara'}]
}
