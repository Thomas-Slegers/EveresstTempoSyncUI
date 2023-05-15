import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {SyncInputService} from './sync-input.service';
import {TestBed} from '@angular/core/testing';


describe('SyncInputService', () => {
    let service: SyncInputService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
        });
        service = TestBed.inject(SyncInputService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
