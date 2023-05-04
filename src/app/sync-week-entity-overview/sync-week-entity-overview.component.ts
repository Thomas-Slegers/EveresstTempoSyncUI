import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {SyncEntityService} from "../service/sync-entity.service";
import {SyncWeekEntity} from "../model/sync-week-entity";

@Component({
    selector: 'app-sync-week-entity.ts-overview',
    templateUrl: './sync-week-entity-overview.component.html',
    styleUrls: ['./sync-week-entity-overview.component.css']
})
export class SyncWeekEntityOverviewComponent implements OnInit {
    syncWeekEntities: SyncWeekEntity[];

    constructor(private route: ActivatedRoute, private router: Router, private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        let syncTableUUID = this.route.snapshot.paramMap.get("syncTableUUID")
        let resourceId = this.route.snapshot.paramMap.get("resourceId")
        let date = this.route.snapshot.paramMap.get("date")
        if (syncTableUUID != null && resourceId != null && date != null) {
            this.syncEntityService.findWeekEntitiesBySyncTableUUIDAndResourceId(syncTableUUID, resourceId, date).subscribe({
                next: (response) => {
                    this.syncWeekEntities = response;
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }
}
