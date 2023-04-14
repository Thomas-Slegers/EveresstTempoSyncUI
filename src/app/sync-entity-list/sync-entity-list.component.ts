import {Component, OnInit} from '@angular/core';
import {SyncEntity} from "../model/sync-entity";
import {SyncEntityService} from "../service/sync-entity.service";

@Component({
    selector: 'app-sync-entity-list',
    templateUrl: './sync-entity-list.component.html',
    styleUrls: ['./sync-entity-list.component.css']
})
export class SyncEntityListComponent implements OnInit {

    syncEntities: SyncEntity[];

    constructor(private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        this.syncEntityService.findAll().forEach((syncEntity) => console.log(syncEntity))
        this.syncEntityService.findAll().subscribe({
            next: (response) => {
                this.syncEntities = response;
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
}
