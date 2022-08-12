import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentieluserComponent } from './referentieluser.component';

describe('ReferentieluserComponent', () => {
  let component: ReferentieluserComponent;
  let fixture: ComponentFixture<ReferentieluserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferentieluserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferentieluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
