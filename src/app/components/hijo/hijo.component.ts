import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo: string = 'Sin nombre';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  //* constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(): void {
    this.nombreHijo = 'Juan Carlos';
    // this.dataService.nombreUsuario = this.nombreHijo;
    this.cambioNombreHijo.emit(this.nombreHijo);
  }

}
