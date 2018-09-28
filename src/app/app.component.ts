import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string;
  logo: string;
  oculto: boolean = true;
  constructor () {
    this.nombre = 'Jaime Cervantes Velasco';
    this.logo = 'https://angular.io/assets/images/logos/angular/angular.png';
  }
  
  cambiarNombre (name) {
    this.nombre = this.nombre.split('').reverse().join('');;
  }
}
