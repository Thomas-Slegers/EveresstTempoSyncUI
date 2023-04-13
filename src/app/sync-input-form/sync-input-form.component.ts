import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SyncInputService} from "../service/sync-input.service";
import {FormGroup, FormControl} from '@angular/forms';


@Component({
    selector: 'app-sync-input-form',
    templateUrl: './sync-input-form.component.html',
    styleUrls: ['./sync-input-form.component.css']
})
export class SyncInputFormComponent implements OnInit {
    file: string;
    operation: string;
    baseUrl: string;
    clientId: string;
    clientSecret: string;
    formdata;

    ngOnInit() {
        this.formdata = new FormGroup({
            file: new FormControl('pathToFile'),
            operation: new FormControl("operationExample"),
            baseUrl: new FormControl("baseURLExample"),
            clientId: new FormControl("clientIdExample"),
            clientSecret: new FormControl("clientSecretExample")
        });
    }

    onClickSubmit(data) {
        this.file = data.file;
        this.operation = data.operation;
        this.baseUrl = data.baseUrl;
        this.clientId = data.clientId;
        this.clientSecret = data.clientSecret;
    }


    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private syncInputService: SyncInputService) {
    }

    onSubmit() {
        this.syncInputService.send();
    }
}
