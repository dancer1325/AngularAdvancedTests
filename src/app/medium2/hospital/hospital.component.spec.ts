import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalComponent } from './hospital.component';

// This class has been created automatically using angular cli

describe('HospitalComponent', () => {
  let component: HospitalComponent;
  let fixture: ComponentFixture<HospitalComponent>;

  // async
  // 1) Wait for loading the component which requires the html file
  // 2) Since angular cli works with webpack === compiling the ts --> component.ts and .component.html are in the same file after compiling
  // --> async is not necessary
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HospitalComponent],
    }).compileComponents(); // Not necessary anymore, due to same reason as 2)
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Launch the detection of the angular changes
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
