import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditrenouvelableComponent } from './creditrenouvelable.component';

describe('CreditrenouvelableComponent', () => {
  let component: CreditrenouvelableComponent;
  let fixture: ComponentFixture<CreditrenouvelableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditrenouvelableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditrenouvelableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
