import { TestBed } from '@angular/core/testing';

import { RefuserserviceService } from './refuserservice.service';

describe('RefuserserviceService', () => {
  let service: RefuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
