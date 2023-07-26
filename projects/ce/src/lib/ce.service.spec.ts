import { TestBed } from '@angular/core/testing';

import { CeService } from './ce.service';

describe('CeService', () => {
  let service: CeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
