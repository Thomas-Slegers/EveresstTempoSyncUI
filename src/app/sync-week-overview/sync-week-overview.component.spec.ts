import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SyncWeekOverviewComponent} from './sync-week-overview.component';

describe('SyncWeekEntityOverviewComponent', () => {
    let component: SyncWeekOverviewComponent;
    let fixture: ComponentFixture<SyncWeekOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SyncWeekOverviewComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SyncWeekOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
