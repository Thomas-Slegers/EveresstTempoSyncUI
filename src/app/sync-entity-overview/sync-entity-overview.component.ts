import {Clipboard} from '@angular/cdk/clipboard';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SyncEntity} from "../model/sync-entity";
import {SyncEntityService} from "../service/sync-entity.service";

@Component({
    selector: 'app-sync-entity-list',
    templateUrl: './sync-entity-overview.component.html',
    styleUrls: ['./sync-entity-overview.component.css']
})
export class SyncEntityOverviewComponent implements OnInit {
    filter: string;
    syncEntities: SyncEntity[];
    filteredEntities: SyncEntity[]
    syncVisibility = true

    constructor(private route: ActivatedRoute, private clipboard: Clipboard, private router: Router, private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        let syncTableUUID = this.route.snapshot.paramMap.get("syncTableUUID")
        if (syncTableUUID != null) {
            this.syncEntityService.findBySyncTableUUID(syncTableUUID).subscribe({
                next: (response) => {
                    this.syncEntities = response;
                    this.filterVisibilitySyncEntitiesAndSort()
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    copySlackInput() {
        let syncTableUUID = this.route.snapshot.paramMap.get("syncTableUUID")
        if (syncTableUUID != null) {
            this.syncEntityService.findSlackInputBySyncTableUUID(this.route.snapshot.paramMap.get("syncTableUUID")).subscribe(response => {
                const pending = this.clipboard.beginCopy(response.message);
                let remainingAttempts = 3;
                const attempt = () => {
                    const result = pending.copy();
                    if (!result && --remainingAttempts) {
                        setTimeout(attempt);
                    } else {
                        // Remember to destroy when you're done!
                        pending.destroy();
                    }
                };
                attempt();
            })
        }
    }

    getOverviewWeek(syncEntity: SyncEntity) {
        let syncTableUUID = this.route.snapshot.paramMap.get("syncTableUUID")
        this.router.navigate(['./sync/' + syncTableUUID + '/' + syncEntity.resourceId + '/' + syncEntity.startDate])
    }

    changeSyncVisibility(event) {
        this.syncVisibility = event.target.checked;
        this.filterVisibilitySyncEntitiesAndSort();
    }

    filterVisibilitySyncEntitiesAndSort() {
        if (!this.syncVisibility) {
            this.filteredEntities = this.syncEntities.filter(syncEntity => !syncEntity.message.toLowerCase().includes("no sync action needed for"))
        } else {
            this.filteredEntities = this.syncEntities;
        }
        this.filteredEntities.sort((firstElement, secondElement) => firstElement.employeeName.localeCompare(secondElement.employeeName) || firstElement.startDate.localeCompare(secondElement.startDate));
    }
}
