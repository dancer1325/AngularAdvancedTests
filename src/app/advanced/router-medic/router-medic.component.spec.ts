import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { RouterMedicComponent } from './router-medic.component';

// We don't need to test Angular functionality about the routes --> Define dummy route classes

class FakeRouter {
  // navigate(params) {} // Variable declared but not read ever
  navigate(params: any) {} // Just declaring the type is enough
}

class FakeActivatedRoute {
  // params: Observable<any> = Observable.empty(); // If you define the observable in this way --> It's not possible to push a property
  // --> Alternative. Use a Subject

  private subject = new Subject();
  // Observable and Observer at the same type
  // 1) Suscribe to a Subject
  // 2) Call to next one's

  // push(valor) { // It doesn't work --> // Just declaring the type is enough
  push(valor: any) {
    this.subject.next(valor); // Call to the next observable with the values to send
  }

  get params() {
    return this.subject.asObservable(); // Creates a new Observable from this Subject as source
  }
}

describe('RouterMedicComponent', () => {
  let component: RouterMedicComponent;
  let fixture: ComponentFixture<RouterMedicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RouterMedicComponent],
      providers: [
        // Ways to add services required for the initialization of the component
        // 1) Directly from Angular
        // Router,
        // ActivatedRoute
        // 2) Customized services
        { provide: Router, useClass: FakeRouter }, // useClass allows replacing normal Angular class by a customized one
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {
    // const router = TestBed.get(Router); // .get Deprecated from Angular 9.00
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate'); // Crea the spy to be test

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });

  it('Debe de colocar el id = nuevo', () => {
    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute); // .get Deprecated from Angular 9.00
    // const activatedRoute: FakeActivatedRoute = TestBed.inject(ActivatedRoute); // Try to fix it, because .inject should be the right way. How to add the missing property ????

    activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');
  });
});
