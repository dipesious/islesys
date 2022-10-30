import { TestBed } from '@angular/core/testing';

import { AlgoFontService } from './algo-font.service';

describe('AlgoFontService', () => {
  let service: AlgoFontService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoFontService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
