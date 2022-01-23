import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule.withRoutes([])], // Module for testing the routes. Since we don't test the route functionality from Angular --> Not necesary indicate the routes]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Check if there is a router link to medicos', () => {
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
