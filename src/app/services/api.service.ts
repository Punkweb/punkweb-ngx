import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { HttpService } from './http.service';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: HttpService) { }

  public getCategory(id: number | string): Observable<any> {
    return this.http.get(API_URL + `/categories/${id}`);
  }

  public getAllCategories(): Observable<any> {
    return this.http.get(API_URL + '/categories');
  }

  public getAllSubcategories(): Observable<any> {
    return this.http.get(API_URL + '/subcategories');
  }

  public getSubcategory(id: number | string) {
    return this.http.get(API_URL + `/subcategories/${id}`);
  }

  public getSubcategoriesOfCategory(parent: number | string) {
    return this.http.get(API_URL + '/subcategories', {
      parent_id: parent
    });
  }

  public getThread(id: number | string) {
    return this.http.get(API_URL + `/threads/${id}`);
  }

  public getAllThreads() {
    return this.http.get(API_URL + '/threads');
  }

  public getAllThreadsOfSubcategory(subcategory: number | string) {
    return this.http.get(API_URL + `/threads`, {
      subcategory_id: subcategory
    });
  }

  public postThread(data: any) {
    return this.http.post(API_URL + '/threads/', data);
  }

  public getPost(id: number | string) {
    return this.http.get(API_URL + `/posts/${id}`);
  }

  public getAllPosts() {
    return this.http.get(API_URL + '/posts');
  }

  public getAllConversations() {

  }

  public getAllMessage() {

  }

  public getAllShouts() {

  }

  public getAllUsers() {
    return this.http.get(API_URL + '/users');
  }
}
