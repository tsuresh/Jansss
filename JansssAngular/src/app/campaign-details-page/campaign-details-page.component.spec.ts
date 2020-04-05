import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailsPageComponent } from './campaign-details-page.component';

describe('CampaignDetailsPageComponent', () => {
  let component: CampaignDetailsPageComponent;
  let fixture: ComponentFixture<CampaignDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
