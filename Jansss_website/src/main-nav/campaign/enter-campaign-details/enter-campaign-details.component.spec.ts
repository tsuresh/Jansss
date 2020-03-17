import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCampaignDetailsComponent } from './enter-campaign-details.component';

describe('EnterCampaignDetailsComponent', () => {
  let component: EnterCampaignDetailsComponent;
  let fixture: ComponentFixture<EnterCampaignDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCampaignDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCampaignDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
