import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './increaser.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule], // Necessary to test things above ngModel
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';

    fixture.detectChanges(); // disparar la detección de cambios
    // When Angular app is started up, no value for leyebda is inserted into by default
    // --> To insert the previous value indicated, it's necessary to launch the angular detection changes cycle

    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement; // HTMLElement native HTML element

    expect(elem.innerHTML).toContain('Progreso de carga');
  });

  it('Debe de mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();
    // Launch the angular detection changes cycle

    fixture.whenStable().then(() => {
      // .detectChanges can take some time, and getting some error --> whenStable is a promise,
      // which is resolved when the fixture is stable
      const input = fixture.debugElement.query(By.css('input'));
      const elem = input.nativeElement;

      console.log(elem);

      expect(elem.value).toBe('55');
    });
  });

  it('Debe de incrementar/decrementar en 5, con un click en el botón', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));

    botones[0].triggerEventHandler('click', null); // Event handler
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  });

  // Check if some event is triggered --> Another html element has been changed
  it('En el titulo del componente, debe de mostrar el progreso', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);

    fixture.detectChanges();
    // Launch the angular detection changes cycle

    const elem: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(elem.innerHTML).toContain('45');
  });
});
