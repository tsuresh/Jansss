import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCampaignComponent } from './select-campaign.component';

describe('SelectCampaignComponent', () => {
  let component: SelectCampaignComponent;
  let fixture: ComponentFixture<SelectCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
