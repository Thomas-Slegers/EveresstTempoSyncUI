import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {SyncInputFormComponent} from './sync-input-form.component';

describe('SyncInputFormComponent', () => {
    let component: SyncInputFormComponent;
    let fixture: ComponentFixture<SyncInputFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule],
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
