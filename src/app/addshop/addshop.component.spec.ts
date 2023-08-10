import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshopComponent } from './addshop.component';

describe('AddshopComponent', () => {
  let component: AddshopComponent;
  let fixture: ComponentFixture<AddshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddshopComponent]
    });
    fixture = TestBed.createComponent(AddshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
