import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {SyncEntityService} from "../service/sync-entity.service";
import {SyncDayEntity} from "../model/sync-day-entity";

@Component({
    selector: 'app-sync-day-entity.ts-overview',
    templateUrl: './sync-week-overview.component.html',
    styleUrls: ['./sync-week-overview.component.css']
})
export class SyncWeekOverviewComponent implements OnInit {
    syncDayEntities: SyncDayEntity[];

    constructor(private route: ActivatedRoute, private router: Router, private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        let syncTableUUID = this.route.snapshot.paramMap.get("syncTableUUID")
        let resourceId = this.route.snapshot.paramMap.get("resourceId")
        let date = this.route.snapshot.paramMap.get("date")
        if (syncTableUUID != null && resourceId != null && date != null) {
            this.syncEntityService.findDayEntitiesBySyncTableUUIDAndResourceId(syncTableUUID, resourceId, date).subscribe({
                next: (response) => {
                    this.syncDayEntities = response;
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }
}
