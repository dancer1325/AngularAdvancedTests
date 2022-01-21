import { Component, OnInit } from '@angular/core';
import { MedicosService } from './doctor.service';

// Component to add to the module
@Component({
  selector: 'app-medicos',
  template: ` <p>medicos works!</p> `,
  styles: [],
})
export class MedicosComponent implements OnInit {
  public medicos: any[] = [];
  public mensajeError: string = ''; // Initialize since we get an error ts 2564 -- https://tutorial.tips/3-ways-to-fix-property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructorts/ --

  constructor(public _medicoService: MedicosService) {}

  ngOnInit() {
    this._medicoService
      .getMedicos()
      //.subscribe((medicos: any[]) => (this.medicos = medicos)); // First function's argument is the value of the response of the event suscribed
      .subscribe((whatever: any[]) => (this.medicos = whatever)); // Name of the argument of the function can be whatever
  }

  agregarMedico() {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.agregarMedico(medico).subscribe(
      (medicoDB: any) => this.medicos.push(medicoDB),
      (err: string) => (this.mensajeError = err)
    );
  }

  borrarMedico(id: string) {
    const confirmar = confirm('Estas seguro que desea borrar este médico'); // Display a dialog with an optional message, and needed to wait until the user either confirms or cancels it

    if (confirmar) {
      this._medicoService.borrarMedico(id);
    }
  }
}
