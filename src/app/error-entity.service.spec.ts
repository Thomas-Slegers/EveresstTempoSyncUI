import { TestBed } from '@angular/core/testing';

import { ErrorEntityService } from './error-entity.service';

describe('ErrorEntityService', () => {
  let service: ErrorEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
