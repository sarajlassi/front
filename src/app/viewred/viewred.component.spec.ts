import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewredComponent } from './viewred.component';

describe('ViewredComponent', () => {
  let component: ViewredComponent;
  let fixture: ComponentFixture<ViewredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewredComponent]
    });
    fixture = TestBed.createComponent(ViewredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
