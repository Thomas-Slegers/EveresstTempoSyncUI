import {Component, OnInit} from '@angular/core';
import {SyncEntity} from "../model/sync-entity";
import {SyncEntityService} from "../service/sync-entity.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-sync-entity-list',
    templateUrl: './sync-entity-list.component.html',
    styleUrls: ['./sync-entity-list.component.css']
})
export class SyncEntityListComponent implements OnInit {
    filter: string;
    syncEntities: SyncEntity[];

    constructor(private route: ActivatedRoute, private router: Router, private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        let syncTableUUID = this.route.snapshot.paramMap.get("syncTableUUID")
        if (syncTableUUID != null) {
            this.syncEntityService.findBySyncTableUUID(this.route.snapshot.paramMap.get("syncTableUUID")).subscribe({
                next: (response) => {
                    this.syncEntities = response;
                },
                error: (error) => {
                    console.log(error);
                }
            });
        } else {
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
}
