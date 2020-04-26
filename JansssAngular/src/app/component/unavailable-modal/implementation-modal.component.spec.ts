import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementationModalComponent } from './implementation-modal.component';

describe('ImplementationModalComponent', () => {
  let component: ImplementationModalComponent;
  let fixture: ComponentFixture<ImplementationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImplementationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImplementationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
