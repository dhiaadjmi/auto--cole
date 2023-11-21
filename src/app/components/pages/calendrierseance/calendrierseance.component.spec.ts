import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierseanceComponent } from './calendrierseance.component';

describe('CalendrierseanceComponent', () => {
  let component: CalendrierseanceComponent;
  let fixture: ComponentFixture<CalendrierseanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierseanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierseanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
