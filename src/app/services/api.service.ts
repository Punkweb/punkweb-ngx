import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

interface ApiOperations {
  create(payload: any): Observable<any>;
  read(id: number | string, params: any): Observable<any>;
  list(params: any): Observable<any>;
  paged(params: any): Observable<any>;
  update(id: number | string, payload: any, put: boolean): Observable<any>;
  delete(id: number | string): Observable<any>;
  listRoute(method: string, route: string, payload: any, params: any);
  detailRoute(method: string, route: string, id: string, payload: any, params: any);
}

interface ListResponse {
  results: any[];
  count: number;
  previous: string;
  next: string;
}

class ApiEndpoint implements ApiOperations {

  constructor(private http: HttpService, public endpoint: string) { }

  public create(payload = {}): Observable<any> {
    const request = this.http.post(this.createUrl(), payload);
    return request
      .catch((error: any) => Observable.throw(error));
  }

  public read(id: number | string, params = {}): Observable<any> {
    const request = this.http.get(this.createUrl(id), params);
    return request
      .catch((error: any) => Observable.throw(error));
  }

  public list(params = {}): Observable<any> {
    const request = this.http.get(this.createUrl(), params);
    return request
      .map((response: ListResponse) => {
        const results = Object.assign(response.results, {
          count: response.count,
          next: response.next,
          previous: response.previous
        });
        return results;
      }).catch((error: any) => Observable.throw(error));
  }

  public paged(params = {}): Observable<any> {
    const request = this.http.get(this.createUrl(), params);
    return request
      .flatMap((firstPage: ListResponse) => {
        const pageObservables: Observable<any>[] = [Observable.of(firstPage.results)];
        // construct each page url for each existing page, starting at 2
        if (firstPage.next) {
          for (let i = 2; i <= Math.ceil(firstPage.count / firstPage.results.length); i++) {
            const page = this.http.get(this.createUrl(), Object.assign(params, { page: i }))
              .map((pageResponse: ListResponse) => pageResponse.results);
            pageObservables.push(page);
          }
        }
        return Observable.combineLatest(pageObservables)
          .map((nested) => nested.reduce((acc, cur) => acc.concat(cur), []))
          .catch((error: any) => Observable.throw(error));
      }).catch((error: any) => Observable.throw(error));
  }

  public update(id: number | string, payload = {}, put = false): Observable<any> {
    let request = null;
    if (put) {
      request = this.http.put(this.createUrl(id), payload);
    } else {
      request = this.http.patch(this.createUrl(id), payload);
    }
    return request
      .catch((error: any) => Observable.throw(error));
  }

  public delete(id: number | string): Observable<any> {
    const request = this.http.delete(this.createUrl(id));
    return request
      .catch((error: any) => Observable.throw(error));
  }

  public listRoute(method: string, route: string, payload = {}, params = {}): Observable<any> {
    const request = this.http.request(method, `${this.createUrl()}/${route}`, payload, params);
    return request
      .catch((error: any) => Observable.throw(error));
  }

  public detailRoute(method: string, route: string, id: number | string, payload = {}, params = {}): Observable<any> {
    const request = this.http.request(method, `${this.createUrl()}/${route}/${id}`, payload, params);
    return request
      .catch((error: any) => Observable.throw(error));
  }

  private createUrl(id: number | string = null): string {
    if (id) {
      return `${environment.apiUrl}/${this.endpoint}/${id}`;
    } else {
      return `${environment.apiUrl}/${this.endpoint}`;
    }
  }
}

@Injectable()
export class ApiService {

  public User = new ApiEndpoint(this.http, '/users');

  constructor(
    private http: HttpService
  ) { }
}
