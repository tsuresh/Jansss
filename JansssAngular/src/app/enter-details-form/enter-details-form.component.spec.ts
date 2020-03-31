import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterDetailsFormComponent } from './enter-details-form.component';

describe('EnterDetailsFormComponent', () => {
  let component: EnterDetailsFormComponent;
  let fixture: ComponentFixture<EnterDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
