import { TestBed } from '@angular/core/testing';

import { ComptedaveService } from './comptedave.service';

describe('ComptedaveService', () => {
  let service: ComptedaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptedaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
