import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcatComponent } from './viewcat.component';

describe('ViewcatComponent', () => {
  let component: ViewcatComponent;
  let fixture: ComponentFixture<ViewcatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcatComponent]
    });
    fixture = TestBed.createComponent(ViewcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
