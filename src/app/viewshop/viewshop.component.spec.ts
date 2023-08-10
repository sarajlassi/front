import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewshopComponent } from './viewshop.component';

describe('ViewshopComponent', () => {
  let component: ViewshopComponent;
  let fixture: ComponentFixture<ViewshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewshopComponent]
    });
    fixture = TestBed.createComponent(ViewshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
