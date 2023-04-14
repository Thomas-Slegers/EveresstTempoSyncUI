import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SyncEntity} from "../model/sync-entity";

@Injectable({
    providedIn: 'root'
})
export class SyncEntityService {
    private syncUrl: string;

    constructor(private http: HttpClient) {
        this.syncUrl = 'http://localhost:8080/sync';
    }

    public findAll(): Observable<SyncEntity[]> {
        return this.http.get<SyncEntity[]>(this.syncUrl);
    }

    public findBySyncTableUUID(syncTableUUID: any): Observable<SyncEntity[]> {
        return this.http.get<SyncEntity[]>(`${this.syncUrl}/${syncTableUUID}`);
    }
}
