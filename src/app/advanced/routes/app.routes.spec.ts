import { RUTAS } from './app.routes';
import { MedicoComponent } from '../../medium2/medic/medic.component';
import { HospitalComponent } from 'src/app/medium2/hospital/hospital.component';
import { IncrementadorComponent } from 'src/app/medium2/increaser/increaser.component';

describe('Rutas principales', () => {
  it('Debe de existir la ruta /medico/:id', () => {
    expect(RUTAS).toContain({
      path: 'medico/:id',
      component: MedicoComponent,
    });
  });

  it('Check all the routes', () => {
    expect(RUTAS.length).toEqual(3);
    expect(RUTAS).toContain({
      path: 'hospital',
      component: HospitalComponent,
    });
    expect(RUTAS).toContain({
      path: 'medico/:id',
      component: MedicoComponent,
    });
    expect(RUTAS).toContain({
      path: '**',
      component: IncrementadorComponent,
    });
  });
});
