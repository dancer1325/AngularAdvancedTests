import { MedicosComponent } from './doctor.component';
import { MedicosService } from './doctor.service';
// import { Observable } from 'rxjs/Observable'; // Relocated
import { Observable, of, from, empty, throwError } from 'rxjs';
// import 'rxjs/add/observable/from'; // Relocated
// import 'rxjs/add/observable/empty'; // Relocated
// import 'rxjs/add/observable/throw'; // Relocated

describe('Test MedicosComponent', () => {
  let medicosComponent: MedicosComponent;
  let servicio: MedicosService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', {
      post: of({}),
      get: of({}),
    }); // Create a mock
    servicio = new MedicosService(spy);
    // servicio  = new MedicosService(null); // Argument of type 'null' not assignable to HttpClient from Angular 11 https://stackoverflow.com/questions/66941972/argument-of-type-null-is-not-assignable-to-parameter-of-type-httpclient-on-a
    medicosComponent = new MedicosComponent(servicio); // Initializing via constructor doesn't invoke immediately ngOnInit()
  });

  it('Init: Debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      // servicio is the object upon which installs the spy
      // getMedicos is the name of the method to replace by a spy
      //return Observable.from([medicos]); // Deprecated from Angular 5.0
      return from([medicos]); // Create an observable, returning a flow with the content of the array
    });

    medicosComponent.ngOnInit();

    expect(medicosComponent.medicos.length).toBeGreaterThan(0);
    expect(medicosComponent.medicos).toEqual(medicos);
  });

  it('Debe de llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      // return Observable.empty(); // Deprecated from Angular 5.0
      return empty(); // Create an Observable which A) emits no items to Observer, B) emits a complete notification
    });
    // Another way to implement the returning part is  via returnValue

    medicosComponent.agregarMedico();

    expect(espia).toHaveBeenCalled(); // Check if the spy was called
    // expect(espia.length).toEqual(0);
  });

  it('Debe de agregar un nuevo médico al arreglo de médicos', () => {
    const medico = { id: 1, nombre: 'Juan' };

    // spyOn(servicio, 'agregarMedico').and.returnValue(Observable.from([medico])); // Deprecated from Angular 5.0
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));

    medicosComponent.agregarMedico();

    expect(medicosComponent.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    expect(medicosComponent.medicos.length).toEqual(1); // There is just 1 element, since "medicosComponent" have been intialized via constructor
    expect(medicosComponent.medicos[0]).toEqual(medico);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'Nose pudo agregar el médico';

    //spyOn(servicio, 'agregarMedico').and.returnValue(Observable.throw(miError)); // Deprecated from Angular 5.0
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError)); //Simulate some error throw

    medicosComponent.agregarMedico();

    expect(medicosComponent.mensajeError).toBe(miError);
    expect(medicosComponent.medicos.length).toEqual(0); // // There is no element, since "medicosComponent" have been intialized via constructor
  });

  it('Debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(true); // Necessary to add an spy, to have automatic tests, instead of doing manually

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
      //Observable.empty() // Deprecated from Angular 5.0
      empty() // Value to return not important in our logic --> Indicate empty
    );

    medicosComponent.borrarMedico('1');

    expect(espia).toHaveBeenCalled();
    expect(espia).toHaveBeenCalledWith('1'); // Check the value indicated in the function
  });

  it('NO debe de llamar al servidor para borrar un médico', () => {
    spyOn(window, 'confirm').and.returnValue(false); // Necessary to add an spy, to have automatic tests, instead of doing manually

    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
      //Observable.empty() // Deprecated from Angular 5.0
      empty()
    );

    medicosComponent.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
