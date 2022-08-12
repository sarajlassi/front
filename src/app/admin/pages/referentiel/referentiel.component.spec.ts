import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentielComponent } from './referentiel.component';

describe('ReferentielComponent', () => {
  let component: ReferentielComponent;
  let fixture: ComponentFixture<ReferentielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferentielComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferentielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
