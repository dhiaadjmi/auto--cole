import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamcalendrierComponent } from './examcalendrier.component';

describe('ExamcalendrierComponent', () => {
  let component: ExamcalendrierComponent;
  let fixture: ComponentFixture<ExamcalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamcalendrierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamcalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
