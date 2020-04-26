import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorEditProfileComponent } from './vendor-edit-profile.component';

describe('VendorEditProfileComponent', () => {
  let component: VendorEditProfileComponent;
  let fixture: ComponentFixture<VendorEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
