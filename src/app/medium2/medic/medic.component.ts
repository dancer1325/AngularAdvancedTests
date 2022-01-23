import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medic.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medic.component.html',
  styles: [],
})
export class MedicoComponent implements OnInit {
  medicos: any[] = [];

  constructor(public _medicoService: MedicoService) {}

  ngOnInit() {}

  saludarMedico(nombre: string) {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this._medicoService.getMedicos().subscribe(
      // (whatever: any[]) => (this.medicos = whatever) // any[] doesn't work
      (whatever: any) => (this.medicos = whatever)
    );
  }
}
