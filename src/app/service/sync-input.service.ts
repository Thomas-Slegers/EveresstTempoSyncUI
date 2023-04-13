import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SyncInputEntity} from "../model/sync-input-entity";

@Injectable({
    providedIn: 'root'
})
export class SyncInputService {
    private syncUrl: string;

    constructor(private http: HttpClient) {
        this.syncUrl = 'http://localhost:8080/sync-input';
    }

    public startSync(syncInputEntity: SyncInputEntity) {
        return this.http.post<SyncInputEntity>(this.syncUrl, syncInputEntity);
    }
}
