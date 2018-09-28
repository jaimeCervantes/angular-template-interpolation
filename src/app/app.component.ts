import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gente: Array<any>;
  persona: Object = 'Soy otra persona';

  constructor() {
    this.gente = [{
      nombre: 'Jaime',
      edad: 30,
    },
    {
      nombre: 'Guadalupe',
      edad: 25
    },
    {
      nombre: 'Jacobo',
      edad: 35
    },
    {
      nombre: 'Ruben',
      edad: 31
    }
    ]
  }
}
