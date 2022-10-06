import { TestBed } from '@angular/core/testing';

import { AlgoPatternService } from './algo-pattern.service';

describe('AlgoPatternService', () => {
  let service: AlgoPatternService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoPatternService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
