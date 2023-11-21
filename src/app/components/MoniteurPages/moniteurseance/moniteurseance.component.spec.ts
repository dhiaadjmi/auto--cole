import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoniteurseanceComponent } from './moniteurseance.component';

describe('MoniteurseanceComponent', () => {
  let component: MoniteurseanceComponent;
  let fixture: ComponentFixture<MoniteurseanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoniteurseanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoniteurseanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
