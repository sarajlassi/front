import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsByCatComponent } from './shops-by-cat.component';

describe('ShopsByCatComponent', () => {
  let component: ShopsByCatComponent;
  let fixture: ComponentFixture<ShopsByCatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopsByCatComponent]
    });
    fixture = TestBed.createComponent(ShopsByCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
