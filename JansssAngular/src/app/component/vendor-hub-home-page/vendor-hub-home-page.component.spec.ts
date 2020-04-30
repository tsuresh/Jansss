import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorHubHomePageComponent } from './vendor-hub-home-page.component';

describe('VendorHubHomePageComponent', () => {
  let component: VendorHubHomePageComponent;
  let fixture: ComponentFixture<VendorHubHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorHubHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorHubHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
