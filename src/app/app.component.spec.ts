import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './advanced/navbar/navbar.component';
//import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core'; // From Angular 5 doesn't work
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, NavbarComponent], // If you get some error in this class, maybe it's necessary to import navBar component
      imports: [
        // RouterModule.forRoot(RUTAS), // It would test angular feauters, which is not necessary
        RouterTestingModule.withRoutes([]), // Module for testing the routes. Since we don't test the route functionality from Angular --> Not necesary indicate the routes
      ],
      schemas: [NO_ERRORS_SCHEMA], // If there are so many components indicated in the html, but not necessary to test --> We can ignore all uknown selector
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularAdvancedTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularAdvancedTest');
  });

  // html was changed --> The test doesn't work
  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'AngularAdvancedTest app is running!'
    );
  });

  it('Debe de tener un router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    const debugElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(debugElement).not.toBeNull();
  });

  // Comment this test, because it has been moved to navbar component
  xit('Check if there is a router link to medicos', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const routerLinkElements = fixture.debugElement.queryAll(
      By.directive(RouterLinkWithHref) // Since routerlinks indicated have got href --> We use this directive
    );
    // console.log(routerLinkElements);
    let exist = false;
    for (const elem of routerLinkElements) {
      // ngFor works in this same way
      if (elem.attributes['routerLink'] === '/medicos') {
        exist = true;
      }
    }
    expect(exist).toBeTruthy();
  });
});
