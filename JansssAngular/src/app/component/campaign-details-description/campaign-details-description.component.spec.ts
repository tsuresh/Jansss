import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDetailsDescriptionComponent } from './campaign-details-description.component';

describe('CampaignDetailsDescriptionComponent', () => {
  let component: CampaignDetailsDescriptionComponent;
  let fixture: ComponentFixture<CampaignDetailsDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignDetailsDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignDetailsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
