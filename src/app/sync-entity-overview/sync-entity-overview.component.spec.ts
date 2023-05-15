import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {SearchFilterPipe} from "./search-filter-pipe";
import {SyncEntityOverviewComponent} from './sync-entity-overview.component';


describe('SyncEntityOverviewComponent', () => {
    let component: SyncEntityOverviewComponent;
    let fixture: ComponentFixture<SyncEntityOverviewComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, FormsModule],
            declarations: [SyncEntityOverviewComponent, SearchFilterPipe],
            providers: [SearchFilterPipe]
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
