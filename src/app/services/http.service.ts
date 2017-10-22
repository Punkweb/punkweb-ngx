import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  private headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
  ) { }

  public get(url: string, params = {}): Observable<any> {
    return this.request('GET', url, {}, params);
  }

  public post(url: string, body: any = {}, params = {}): Observable<any> {
    return this.request('POST', url, body, params);
  }

  public put(url: string, body: any = {}, params = {}): Observable<any> {
    return this.request('PUT', url, body, params);
  }

  public patch(url: string, body: any = {}, params = {}): Observable<any> {
    return this.request('PATCH', url, body, params);
  }

  public delete(url: string, params = {}): Observable<any> {
    return this.request('DELETE', url, {}, params);
  }

  public request(method: string, url: string, body: any = {}, params = {}): Observable<any> {
    return this.http.request(method, url, {
      body: body,
      headers: this.headers,
      params: this.buildParams(params)
    });
  }

  public buildParams(paramsObj: any): HttpParams {
    let params = new HttpParams();
    Object.keys(paramsObj).forEach((key) => {
      params = params.set(key, paramsObj[key]);
    });
    return params;
  }

  public resetHeaders(key: string, value: string): void {
    this.headers = new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }

  public setHeader(key: string, value: string): void {
    this.headers = this.headers.set(key, value);
  }

  public deleteHeader(key: string) {
    this.headers = this.headers.delete(key);
  }
}
