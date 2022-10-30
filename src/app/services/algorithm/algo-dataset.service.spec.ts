import { TestBed } from '@angular/core/testing';

import { AlgoDatasetService } from './algo-dataset.service';

describe('AlgoDatasetService', () => {
  let service: AlgoDatasetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoDatasetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
