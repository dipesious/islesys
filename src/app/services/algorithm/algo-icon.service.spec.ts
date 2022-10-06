import { TestBed } from '@angular/core/testing';

import { AlgoIconService } from './algo-icon.service';

describe('AlgoIconService', () => {
  let service: AlgoIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
