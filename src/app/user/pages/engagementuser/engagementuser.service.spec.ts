import { TestBed } from '@angular/core/testing';

import { EngagementuserService } from './engagementuser.service';

describe('EngagementuserService', () => {
  let service: EngagementuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EngagementuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
