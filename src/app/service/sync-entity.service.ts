import {HttpClient} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {SyncResultEntry} from "../model/sync-result-entry";
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

    public findBySyncUUID(syncUUID: any): Observable<SyncResultEntry[]> {
        return this.http.get<SyncResultEntry[]>(`${this.syncUrl}/${syncUUID}`);
    }

    public findSlackInputBySyncUUID(syncUUID: any): Observable<any>{
        return this.http.get(`${this.syncUrl}/${syncUUID}/slack`);
    }

    public findDayEntitiesBySyncUUIDAndResourceId(syncUUID: string, resourceId: string, date?: string | null): Observable<any> {
        if(typeof date !== 'undefined' && date != null){
            return this.http.get(`${this.syncUrl}/${syncUUID}/${resourceId}/${date}`);
        }else{
            return this.http.get(`${this.syncUrl}/${syncUUID}/${resourceId}`);
        }
    }
}
