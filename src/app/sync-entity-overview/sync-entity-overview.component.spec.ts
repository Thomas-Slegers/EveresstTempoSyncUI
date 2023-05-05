import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SyncEntityOverviewComponent} from './sync-entity-overview.component';

describe('SyncEntityListComponent', () => {
    let component: SyncEntityOverviewComponent;
    let fixture: ComponentFixture<SyncEntityOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SyncEntityOverviewComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SyncEntityOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
