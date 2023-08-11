import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from "@angular/router";
import {v4 as uuidv4} from 'uuid';
import {SyncInputEntity} from "../model/sync-input-entity";
import {SyncInputService} from "../service/sync-input.service";

@Component({
    selector: 'app-sync-input-form',
    templateUrl: './sync-input-form.component.html'
})
export class SyncInputFormComponent implements OnInit {
    private selectedSyncFiles: FileList;
    private selectedSlackEmployeesFiles: FileList;
    private syncFile: File;
    private slackEmployeesFile: File
    private clientId: string;
    private clientSecret: string;
    private syncInputEntity: SyncInputEntity;
    syncingStarted : boolean;
    syncResultUUID : string;
    formData;

    constructor(private syncInputService: SyncInputService, private router: Router) {
    }

    ngOnInit() {
        this.formData = new FormGroup({
            syncFile: new FormControl(null, Validators.required),
            slackEmployeesFile: new FormControl(null, Validators.required),
            clientId: new FormControl(null, Validators.required),
            clientSecret: new FormControl(null, Validators.required)
        });
        this.syncingStarted = false;
    }

    selectSyncFile(event) {
        this.selectedSyncFiles = event.target.files;
    }

    selectSlackEmployeesFile(event) {
        this.selectedSlackEmployeesFiles = event.target.files;
    }

    onClickSubmit(data) {
        this.syncingStarted = true;
        this.assignVariables(data)
        this.syncResultUUID = this.syncInputEntity.syncResultUUID;
        this.syncInputService.startSync(this.syncInputEntity).subscribe({
            next: () => {},
            complete: () => this.router.navigate(['./sync/' + this.syncInputEntity.syncResultUUID]),
            error: (error) => console.log(error)
        });
    }

    assignVariables(data) {
        // @ts-ignore
        this.syncFile = this.selectedSyncFiles.item(0);
        // @ts-ignore
        this.slackEmployeesFile = this.selectedSlackEmployeesFiles.item(0);
        this.clientId = data.clientId;
        this.clientSecret = data.clientSecret;
        this.syncInputEntity = data;
        this.syncInputEntity.syncFile = this.syncFile;
        this.syncInputEntity.slackEmployeesFile = this.slackEmployeesFile;
        this.syncInputEntity.syncResultUUID = uuidv4();
    }
}
