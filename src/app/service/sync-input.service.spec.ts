import {TestBed} from '@angular/core/testing';

import {SyncInputService} from './sync-input.service';

describe('SyncInputService', () => {
    let service: SyncInputService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SyncInputService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
