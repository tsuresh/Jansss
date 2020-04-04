import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignProgressComponent } from './campaign-progress.component';

describe('CampaignProgressComponent', () => {
  let component: CampaignProgressComponent;
  let fixture: ComponentFixture<CampaignProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
