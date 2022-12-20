import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre: string = 'Nombre usuario';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(): void {
    this.nombre = 'Martín Díaz';
    this.dataService.nombreUsuario = this.nombre;
  }

  hijoCambioNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
    this.dataService.nombreUsuario = nuevoNombre;
  }

}
