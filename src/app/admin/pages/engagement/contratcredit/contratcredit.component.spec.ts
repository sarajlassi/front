import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratcreditComponent } from './contratcredit.component';

describe('ContratcreditComponent', () => {
  let component: ContratcreditComponent;
  let fixture: ComponentFixture<ContratcreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratcreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
