import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorLogInComponent } from './vendor-log-in.component';

describe('VendorLogInComponent', () => {
  let component: VendorLogInComponent;
  let fixture: ComponentFixture<VendorLogInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorLogInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
