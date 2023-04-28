import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
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

    public startSync(syncInputEntity: SyncInputEntity): Observable<HttpEvent<SyncInputEntity>> {
        const formdata: FormData = new FormData();
        formdata.append("syncResultUUID", syncInputEntity.syncResultUUID);
        formdata.append("file", syncInputEntity.file);
        formdata.append("operation", syncInputEntity.operation);
        formdata.append("baseUrl", syncInputEntity.baseUrl);
        formdata.append("clientId", syncInputEntity.clientId);
        formdata.append("clientSecret", syncInputEntity.clientSecret);
        const req = new HttpRequest('POST', this.syncUrl, formdata
            , {
                reportProgress: true,
                responseType: 'text'
            });
        return this.http.request(req);
    }
}
