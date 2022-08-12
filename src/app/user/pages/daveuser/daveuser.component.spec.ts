import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaveuserComponent } from './daveuser.component';

describe('DaveuserComponent', () => {
  let component: DaveuserComponent;
  let fixture: ComponentFixture<DaveuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaveuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaveuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
