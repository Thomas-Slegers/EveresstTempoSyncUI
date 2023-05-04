import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {SyncEntity} from "../model/sync-entity";
import {SyncEntityService} from "../service/sync-entity.service";

@Component({
    selector: 'app-sync-entity-list',
    templateUrl: './sync-entity-list.component.html',
    styleUrls: ['./sync-entity-list.component.css']
})
export class SyncEntityListComponent implements OnInit {
    filter: string;
    syncEntities: SyncEntity[];

    constructor(private route: ActivatedRoute, private clipboard: Clipboard, private router: Router, private syncEntityService: SyncEntityService) {
    }

    ngOnInit() {
        let syncTableUUID = this.route.snapshot.paramMap.get("syncTableUUID")
        if (syncTableUUID != null) {
            this.syncEntityService.findBySyncTableUUID(syncTableUUID).subscribe({
                next: (response) => {
                    this.syncEntities = response;
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
}
