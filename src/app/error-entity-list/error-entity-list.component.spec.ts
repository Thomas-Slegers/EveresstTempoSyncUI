import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorEntityListComponent} from './error-entity-list.component';

describe('ErrorEntityListComponent', () => {
    let component: ErrorEntityListComponent;
    let fixture: ComponentFixture<ErrorEntityListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ErrorEntityListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ErrorEntityListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
