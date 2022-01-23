import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './medium/spies/doctor.component';
import { MedicoComponent } from './medium2/medic/medic.component';
import { HospitalComponent } from './medium2/hospital/hospital.component';
import { IncrementadorComponent } from './medium2/increaser/increaser.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
