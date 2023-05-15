import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SyncEntity} from "../model/sync-entity";
import {Environment} from "../environment";

@Injectable({
    providedIn: 'root'
})
export class SyncEntityService {
    private syncUrl: string;

    constructor(private http: HttpClient) {
        const env = new Environment()
        this.syncUrl = env.getSyncUrl;
    }

    public findBySyncTableUUID(syncTableUUID: any): Observable<SyncEntity[]> {
        return this.http.get<SyncEntity[]>(`${this.syncUrl}/${syncTableUUID}`);
    }

    public findSlackInputBySyncTableUUID(syncTableUUID: any): Observable<any>{
        return this.http.get(`${this.syncUrl}/${syncTableUUID}/slack`);
    }

    public findDayEntitiesBySyncTableUUIDAndResourceId(syncTableUUID: string, resourceId: string, date: string): Observable<any> {
        return this.http.get(`${this.syncUrl}/${syncTableUUID}/${resourceId}/${date}`);
    }
}
