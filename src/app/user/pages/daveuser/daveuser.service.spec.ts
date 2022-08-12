import { TestBed } from '@angular/core/testing';

import { DaveuserService } from './daveuser.service';

describe('DaveuserService', () => {
  let service: DaveuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaveuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
