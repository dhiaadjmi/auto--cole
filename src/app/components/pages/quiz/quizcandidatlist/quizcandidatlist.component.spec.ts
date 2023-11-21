import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizcandidatlistComponent } from './quizcandidatlist.component';

describe('QuizcandidatlistComponent', () => {
  let component: QuizcandidatlistComponent;
  let fixture: ComponentFixture<QuizcandidatlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizcandidatlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizcandidatlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
