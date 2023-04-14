import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SyncEntityListComponent} from './sync-entity-list.component';

describe('SyncEntityListComponent', () => {
    let component: SyncEntityListComponent;
    let fixture: ComponentFixture<SyncEntityListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SyncEntityListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SyncEntityListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
