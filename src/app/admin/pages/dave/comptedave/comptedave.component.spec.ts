import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptedaveComponent } from './comptedave.component';

describe('ComptedaveComponent', () => {
  let component: ComptedaveComponent;
  let fixture: ComponentFixture<ComptedaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptedaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptedaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
