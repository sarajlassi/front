import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditpretComponent } from './creditpret.component';

describe('CreditpretComponent', () => {
  let component: CreditpretComponent;
  let fixture: ComponentFixture<CreditpretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditpretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditpretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
