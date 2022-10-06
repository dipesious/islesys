import { TestBed } from '@angular/core/testing';

import { AlgoGradientService } from './algo-gradient.service';

describe('AlgoGradientService', () => {
  let service: AlgoGradientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoGradientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
