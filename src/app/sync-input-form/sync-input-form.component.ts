import {Component, OnInit} from '@angular/core';
import {SyncInputService} from "../service/sync-input.service";
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {SyncInputEntity} from "../model/sync-input-entity";
import {v4 as uuidv4} from 'uuid';
import {Router} from "@angular/router";


const OPERATIONS: string[] = ["SyncTimeSheets", "CheckWorkOrders"]

@Component({
    selector: 'app-sync-input-form',
    templateUrl: './sync-input-form.component.html',
    styleUrls: ['./sync-input-form.component.css']
})
export class SyncInputFormComponent implements OnInit {
    private selectedFiles: FileList;
    private file: File;
    private operation: string;
    private baseUrl: string;
    private clientId: string;
    private clientSecret: string;
    private syncInputEntity: SyncInputEntity;
    formData;
    operations = OPERATIONS;

    constructor(private syncInputService: SyncInputService, private router: Router) {
    }

    ngOnInit() {
        this.formData = new FormGroup({
            file: new FormControl(null, Validators.required),
            operation: new FormControl(null, Validators.required),
            baseUrl: new FormControl(null, Validators.required),
            clientId: new FormControl(null, Validators.required),
            clientSecret: new FormControl(null, Validators.required)
        });
    }

    selectFile(event) {
        this.selectedFiles = event.target.files;
    }

    onClickSubmit(data) {
        this.assignVariables(data)
        this.syncInputService.startSync(this.syncInputEntity).subscribe({
            next: () => {},
            complete: () => this.router.navigate(['./sync/' + this.syncInputEntity.syncResultUUID]),
            error: (error) => console.log(error)
        });
    }

    assignVariables(data) {
        // @ts-ignore
        this.file = this.selectedFiles.item(0);
        this.operation = data.operation;
        this.baseUrl = data.baseUrl;
        this.clientId = data.clientId;
        this.clientSecret = data.clientSecret;
        this.syncInputEntity = data;
        this.syncInputEntity.file = this.file;
        this.syncInputEntity.syncResultUUID = uuidv4();
    }
}
