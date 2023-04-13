import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SyncInputFormComponent} from './sync-input-form.component';

describe('SyncInputFormComponent', () => {
    let component: SyncInputFormComponent;
    let fixture: ComponentFixture<SyncInputFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [SyncInputFormComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(SyncInputFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
