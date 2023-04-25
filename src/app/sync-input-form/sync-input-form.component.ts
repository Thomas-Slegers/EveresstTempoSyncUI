import {Component, OnInit} from '@angular/core';
import {SyncInputService} from "../service/sync-input.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SyncInputEntity} from "../model/sync-input-entity";
import { v4 as uuidv4 } from 'uuid';
import { Router } from "@angular/router";


const OPERATIONS: string[] = ["SyncTimeSheets", "CheckWorkOrders"]

@Component({
    selector: 'app-sync-input-form',
    templateUrl: './sync-input-form.component.html',
    styleUrls: ['./sync-input-form.component.css']
})
export class SyncInputFormComponent implements OnInit {
    private syncResultUUID: string;
    private file: File;
    private operation: string;
    private baseUrl: string;
    private clientId: string;
    private clientSecret: string;
    private syncInputEntity: SyncInputEntity;
    formdata;
    operations = OPERATIONS;

    constructor(private syncInputService: SyncInputService, private router: Router) {
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
        this.syncResultUUID = uuidv4();
        this.file = data.file.data;
        this.operation = data.operation;
        this.baseUrl = data.baseUrl;
        this.clientId = data.clientId;
        this.clientSecret = data.clientSecret;
        this.syncInputEntity = data;
        this.syncInputEntity.syncResultUUID = this.syncResultUUID;
        console.log(this.syncInputEntity)
        this.syncInputService.startSync(this.syncInputEntity).subscribe({
            error: (error) => console.log(error)
        });
        this.router.navigate(['./sync/' + this.syncResultUUID]);
    }
}
