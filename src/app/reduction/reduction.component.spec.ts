import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReductionComponent } from './reduction.component';

describe('ReductionComponent', () => {
  let component: ReductionComponent;
  let fixture: ComponentFixture<ReductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReductionComponent]
    });
    fixture = TestBed.createComponent(ReductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
