import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Envelope } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MyHttpService {
  constructor(private http: HttpClient) {}

  public get<ServerResponseType, ClientType>(
    url: string,
    mapping?: (rawResponse: ServerResponseType) => ClientType,
    requestOptions?: any
  ): Observable<Envelope<ClientType>> {
    const options = requestOptions ? requestOptions : {};
    return this.http.get(url, options).pipe(
      map((response: any) =>
        this.buildResponse<ServerResponseType, ClientType>(response, mapping)
      ),
      catchError((error) => this.buildError<ClientType>(error))
    );
  }

  buildResponse<ServerType, ClientType>(
    response: Envelope<ServerType> | ServerType,
    mapping?: (rawResponse: ServerType) => ClientType
  ): Envelope<ClientType> {
    return {
      data: mapping ? mapping(response as ServerType) : response,
      success: true,
    } as Envelope<ClientType>;
  }

  buildError<ClientType>(
    errorResponse: HttpErrorResponse
  ): Observable<Envelope<ClientType>> {
    const err = errorResponse.error
      ? errorResponse.error
      : errorResponse.message
      ? errorResponse.message
      : 'error';
    return of({
      success: false,
      data: null,
      error: err,
    });
  }
}
