import { TestBed } from '@angular/core/testing';

import { SignitureService } from './signiture.service';

describe('SignitureService', () => {
  let service: SignitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
