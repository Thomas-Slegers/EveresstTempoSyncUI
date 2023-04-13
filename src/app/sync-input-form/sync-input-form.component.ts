import {Component, OnInit} from '@angular/core';
import {SyncInputService} from "../service/sync-input.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SyncInputEntity} from "../model/sync-input-entity";


@Component({
    selector: 'app-sync-input-form',
    templateUrl: './sync-input-form.component.html',
    styleUrls: ['./sync-input-form.component.css']
})
export class SyncInputFormComponent implements OnInit {
    file: string;
    operation: string;
    operations = ["SyncTimeSheets", "CheckWorkOrders"]
    baseUrl: string;
    clientId: string;
    clientSecret: string;
    formdata;
    syncInputEntity: SyncInputEntity;

    constructor(private syncInputService: SyncInputService) {
    }

    ngOnInit() {
        this.formdata = new FormGroup({
            file: new FormControl(null, Validators.required),
            operation: new FormControl(null, Validators.required),
            baseUrl: new FormControl(null, Validators.required),
            clientId: new FormControl(null, Validators.required),
            clientSecret: new FormControl(null, Validators.required)
        });
    }

    onClickSubmit(data) {
        this.file = data.file;
        this.operation = data.operation;
        this.baseUrl = data.baseUrl;
        this.clientId = data.clientId;
        this.clientSecret = data.clientSecret;
        this.syncInputEntity = data;
        this.syncInputService.startSync(this.syncInputEntity)
    }
}
