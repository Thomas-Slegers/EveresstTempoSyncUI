import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SyncInputEntity} from "../model/sync-input-entity";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class SyncInputService {
    private readonly syncUrl: string;

    constructor(private http: HttpClient) {
        this.syncUrl = 'http://localhost:8080/input';
    }

    public startSync(syncInputEntity: SyncInputEntity): Observable<SyncInputEntity> {
        return this.http.post<SyncInputEntity>(this.syncUrl, syncInputEntity);
    }
}
