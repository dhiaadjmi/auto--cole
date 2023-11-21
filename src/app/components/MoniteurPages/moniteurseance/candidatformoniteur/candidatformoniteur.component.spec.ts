import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatformoniteurComponent } from './candidatformoniteur.component';

describe('CandidatformoniteurComponent', () => {
  let component: CandidatformoniteurComponent;
  let fixture: ComponentFixture<CandidatformoniteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatformoniteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatformoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
