import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagementuserComponent } from './engagementuser.component';

describe('EngagementuserComponent', () => {
  let component: EngagementuserComponent;
  let fixture: ComponentFixture<EngagementuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngagementuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngagementuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
