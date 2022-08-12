import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratcompteComponent } from './contratcompte.component';

describe('ContratcompteComponent', () => {
  let component: ContratcompteComponent;
  let fixture: ComponentFixture<ContratcompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratcompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContratcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
