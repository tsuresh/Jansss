import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPaymentMethodComponent } from './select-payment-method.component';

describe('SelectPaymentMethodComponent', () => {
  let component: SelectPaymentMethodComponent;
  let fixture: ComponentFixture<SelectPaymentMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPaymentMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
