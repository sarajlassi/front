import { TestBed } from '@angular/core/testing';

import { CreditrenouvelableService } from './creditrenouvelable.service';

describe('CreditrenouvelableService', () => {
  let service: CreditrenouvelableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditrenouvelableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
