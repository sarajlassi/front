import { TestBed } from '@angular/core/testing';

import { CreditpretService } from './creditpret.service';

describe('CreditpretService', () => {
  let service: CreditpretService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditpretService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
