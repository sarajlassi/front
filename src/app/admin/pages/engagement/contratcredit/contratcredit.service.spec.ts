import { TestBed } from '@angular/core/testing';

import { ContratcreditService } from './contratcredit.service';

describe('ContratcreditService', () => {
  let service: ContratcreditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratcreditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
