import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Environment} from "../environment";
import {SyncInputEntity} from "../model/sync-input-entity";

@Injectable({
    providedIn: 'root'
})
export class SyncInputService {
    private readonly syncUrl: string;

    constructor(private http: HttpClient) {
        const env = new Environment();
        this.syncUrl = env.getInputUrl;
    }

    public startSync(syncInputEntity: SyncInputEntity): Observable<HttpEvent<SyncInputEntity>> {
        const formdata: FormData = new FormData();
        formdata.append("syncResultUUID", syncInputEntity.syncResultUUID);
        formdata.append("file", syncInputEntity.file);
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
