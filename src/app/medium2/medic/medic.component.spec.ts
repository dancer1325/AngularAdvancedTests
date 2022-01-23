import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medic.component';
import { MedicoService } from './medic.service';
import { HttpClientModule } from '@angular/common/http';

describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>; // Debugging and testing a component to have access to the html

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Configure as a normal angular module
      declarations: [MedicoComponent],
      providers: [MedicoService], // Add the injections
      imports: [HttpClientModule], // Add the provide module
    });

    fixture = TestBed.createComponent(MedicoComponent);

    // component = new MedicoComponent() // Initialize a component for unit testing
    component = fixture.componentInstance; // Initialize a component for integration tests
  });

  it('Debe de crearse el componente', () => {
    // Common test created automatically if you create tests via angular cli
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Juan';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);
  });
});
