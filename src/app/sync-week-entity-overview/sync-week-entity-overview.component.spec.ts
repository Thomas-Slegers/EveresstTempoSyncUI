import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SyncWeekEntityOverviewComponent} from './sync-week-entity-overview.component';

describe('SyncWeekEntityOverviewComponent', () => {
    let component: SyncWeekEntityOverviewComponent;
    let fixture: ComponentFixture<SyncWeekEntityOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SyncWeekEntityOverviewComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SyncWeekEntityOverviewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
