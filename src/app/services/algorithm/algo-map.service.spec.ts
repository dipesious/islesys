import { TestBed } from '@angular/core/testing';

import { AlgoMapService } from './algo-map.service';

describe('AlgoMapService', () => {
  let service: AlgoMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
