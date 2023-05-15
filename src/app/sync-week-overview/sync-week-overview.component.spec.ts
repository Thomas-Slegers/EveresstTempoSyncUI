import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {SyncWeekOverviewComponent} from './sync-week-overview.component';

describe('SyncWeekEntityOverviewComponent', () => {
    let component: SyncWeekOverviewComponent;
    let fixture: ComponentFixture<SyncWeekOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule],
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
