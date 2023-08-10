import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreducComponent } from './addreduc.component';

describe('AddreducComponent', () => {
  let component: AddreducComponent;
  let fixture: ComponentFixture<AddreducComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreducComponent]
    });
    fixture = TestBed.createComponent(AddreducComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
