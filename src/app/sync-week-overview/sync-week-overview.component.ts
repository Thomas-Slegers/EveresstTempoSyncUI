import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SyncResultEntry} from "../model/sync-result-entry";
import {SyncEntityService} from "../service/sync-entity.service";

@Component({
    selector: 'app-sync-day-entity.ts-overview',
    templateUrl: './sync-week-overview.component.html',
    styleUrls: ['./sync-week-overview.component.css']
})
export class SyncWeekOverviewComponent implements OnInit {
    syncResultEntries: SyncResultEntry[];

    constructor(private route: ActivatedRoute, private router: Router, private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        let syncUUID = this.route.snapshot.paramMap.get("syncUUID")
        let resourceId = this.route.snapshot.paramMap.get("resourceId")
        let date = this.route.snapshot.paramMap.get("date")
        if (syncUUID != null && resourceId != null) {
            this.syncEntityService.findDayEntitiesBySyncUUIDAndResourceId(syncUUID, resourceId, date).subscribe({
                next: (response) => {
                    this.syncResultEntries = response;
                    this.syncResultEntries.sort((firstElement, secondElement) => firstElement.syncDate.localeCompare(secondElement.syncDate));
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    getRowStyle(syncResultEntry) {
        if (syncResultEntry.syncResult === 'SUCCESS') {
            return {'background-color': 'lightgreen'};
        }
        if (syncResultEntry.syncResult === 'NO_SYNC_REQUIRED') {
            return {'background-color': 'white'};
        }
        if (syncResultEntry.syncResult === 'INSUFFICIENT_HOURS_ERROR') {
            return {'background-color': 'orange'};
        }
        if (syncResultEntry.syncResult === 'WARNING') {
            return {'background-color': 'lightorange'};
        }
        return {'background-color': 'red'};
    }

    getRowIcon(syncResultEntry) {
        if (syncResultEntry.syncResult === 'SUCCESS') {
            return 'check';
        }
        if (syncResultEntry.syncResult === 'NO_SYNC_REQUIRED') {
            return 'balance';
        }
        if (syncResultEntry.syncResult === 'INSUFFICIENT_HOURS_ERROR') {
            return 'alarm';
        }
        if (syncResultEntry.syncResult === 'WARNING') {
            return 'warning';
        }
        return 'clear';
    }

    getCamisHours(syncResultEntry) {
        if (syncResultEntry.camisHours === -1.0) {
            return '';
        }
        return syncResultEntry.camisHours;
    }

    getUrl(){
        return location.pathname;
    }

}
