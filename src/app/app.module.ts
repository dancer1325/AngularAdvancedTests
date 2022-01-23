import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from './medium/spies/doctor.component';
import { MedicoComponent } from './medium2/medic/medic.component';
import { HospitalComponent } from './medium2/hospital/hospital.component';
import { IncrementadorComponent } from './medium2/increaser/increaser.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './advanced/routes/app.routes';
import { NavbarComponent } from './advanced/navbar/navbar.component';
import { RouterMedicComponent } from './advanced/router-medic/router-medic.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(RUTAS)], // Necessary to do routes work
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
