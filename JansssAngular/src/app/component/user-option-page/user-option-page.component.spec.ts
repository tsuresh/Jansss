import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOptionPageComponent } from './user-option-page.component';

describe('UserOptionPageComponent', () => {
  let component: UserOptionPageComponent;
  let fixture: ComponentFixture<UserOptionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserOptionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
