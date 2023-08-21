import {Clipboard} from '@angular/cdk/clipboard';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SyncResultEntry} from "../model/sync-result-entry";
import {SyncEntityService} from "../service/sync-entity.service";

@Component({
    selector: 'app-sync-entity-list',
    templateUrl: './sync-entity-overview.component.html',
    styleUrls: ['./sync-entity-overview.component.css']
})
export class SyncEntityOverviewComponent implements OnInit {
    filter: string;
    syncEntities: SyncResultEntry[];
    filteredEntities: SyncResultEntry[]
    onlyShowErrors = true

    constructor(private route: ActivatedRoute, private clipboard: Clipboard, private router: Router, private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        let syncUUID = this.route.snapshot.paramMap.get("syncUUID")
        if (syncUUID != null) {
            this.syncEntityService.findBySyncUUID(syncUUID).subscribe({
                next: (response) => {
                    this.syncEntities = response;
                    this.filterOnlyShowErrors()
                },
                error: (error) => {
                    console.log(error);
                }
            });
        }
    }

    copySlackInput() {
        let syncUUID = this.route.snapshot.paramMap.get("syncUUID")
        if (syncUUID != null) {
            this.syncEntityService.findSlackInputBySyncUUID(this.route.snapshot.paramMap.get("syncUUID")).subscribe(response => {
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

    showOverviewWeek(syncResultEntry: SyncResultEntry) {
        let syncUUID = this.route.snapshot.paramMap.get("syncUUID")
        this.router.navigate(['./sync/' + syncUUID + '/' + syncResultEntry.resourceId.value + '/' + syncResultEntry.startOfWeek])
    }

    onlyShowErrorsChange(event) {
        this.onlyShowErrors = event.target.checked;
        this.filterOnlyShowErrors();
    }

    filterOnlyShowErrors() {
        if (this.onlyShowErrors) {
            this.filteredEntities = this.syncEntities.filter(syncEntity => syncEntity.syncResult.toLowerCase().includes("error"))
        } else {
            this.filteredEntities = this.syncEntities;
        }
        this.filteredEntities.sort((firstElement, secondElement) => firstElement.employeeName.localeCompare(secondElement.employeeName) || firstElement.syncDate.localeCompare(secondElement.syncDate));
    }
}
