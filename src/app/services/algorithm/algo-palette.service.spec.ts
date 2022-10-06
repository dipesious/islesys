import { TestBed } from '@angular/core/testing';

import { AlgoPaletteService } from './algo-palette.service';

describe('AlgoPaletteService', () => {
  let service: AlgoPaletteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlgoPaletteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
