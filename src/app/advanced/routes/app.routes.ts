import { Routes } from '@angular/router';
import { HospitalComponent } from '../../medium2/hospital/hospital.component';
import { MedicoComponent } from '../../medium2/medic/medic.component';
import { IncrementadorComponent } from '../../medium2/increaser/increaser.component';

export const RUTAS: Routes = [
  { path: 'hospital', component: HospitalComponent },
  { path: 'medico/:id', component: MedicoComponent },
  { path: '**', component: IncrementadorComponent },
];
