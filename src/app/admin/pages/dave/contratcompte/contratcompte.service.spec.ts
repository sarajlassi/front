import { TestBed } from '@angular/core/testing';

import { ContratcompteService } from './contratcompte.service';

describe('ContratcompteService', () => {
  let service: ContratcompteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContratcompteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
