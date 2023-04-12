import {Component, OnInit} from '@angular/core';
import {ErrorEntity} from "../model/error-entity";
import {ErrorEntityService} from "../service/error-entity.service";

@Component({
    selector: 'app-error-entity-list',
    templateUrl: './error-entity-list.component.html',
    styleUrls: ['./error-entity-list.component.css']
})
export class ErrorEntityListComponent implements OnInit {

    errorsEntities: ErrorEntity[];

    constructor(private errorEntityService: ErrorEntityService) {
    }

    ngOnInit() {
        this.errorEntityService.findAll().subscribe(data => {
            this.errorsEntities = data;
        })
    }
}
