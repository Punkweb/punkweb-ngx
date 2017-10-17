import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpService) { }

  public getAllCategories(): Observable<any> {
    return this.http.get(API_URL + '/categories');
  }

  public getAllSubcategories(): Observable<any> {
    return this.http.get(API_URL + '/subcategories');
  }

  public getAllThreads() {

  }

  public getAllPosts() {

  }

  public getAllConversations() {

  }

  public getAllMessage() {

  }

  public getAllShouts() {

  }

  public getAllUsers() {

  }
}
