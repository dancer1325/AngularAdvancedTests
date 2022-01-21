import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'; // Deprecated from Angular 5+
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable()
export class MedicosService {
  // constructor(public http: Http) {} // Deprecated from Angular 5
  constructor(public http: HttpClient) {}

  getMedicos() {
    return (
      this.http
        .get('...')
        // .map((resp: { [x: string]: any }) => resp['medicos']) // It doesn't work from Angular 5+ https://stackoverflow.com/questions/50413038/angular-v6-rxjs-v6-error-ts2339-property-pipe-does-not-exist-on-type-operat
        .pipe(map((resp: { [x: string]: any }) => resp['medicos']))
    ); // { [x: string]: any }) added to fix the problem in ts
  }

  agregarMedico(medico: any) {
    return (
      this.http
        .post('...', medico)
        // .map((resp: { [x: string]: any }) => resp['medico']); // It doesn't work from Angular 5+
        .pipe(map((resp: { [x: string]: any }) => resp['medico']))
    );
  }

  borrarMedico(id: string) {
    return (
      this.http
        .delete('...')
        // .map((resp: { [x: string]: any }) => resp['medico']); // It doesn't work from Angular 5+
        .pipe(map((resp: { [x: string]: any }) => resp['medico']))
    );
  }
}
