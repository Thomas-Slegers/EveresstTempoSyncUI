import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ErrorEntity} from "../model/error-entity";

@Injectable({
  providedIn: 'root'
})
export class ErrorEntityService {
  private errorsUrl: string;

  constructor(private http: HttpClient) {
    this.errorsUrl = 'http://localhost:8080/errors';
  }

  public findAll(): Observable<ErrorEntity[]> {
    return this.http.get<ErrorEntity[]>(this.errorsUrl);
  }
}
