import { TestBed } from '@angular/core/testing';

import { SyncEntityService } from './sync-entity.service';

describe('SyncEntityService', () => {
  let service: SyncEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});