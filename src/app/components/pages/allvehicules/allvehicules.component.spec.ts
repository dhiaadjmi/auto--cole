import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvehiculesComponent } from './allvehicules.component';

describe('AllvehiculesComponent', () => {
  let component: AllvehiculesComponent;
  let fixture: ComponentFixture<AllvehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
