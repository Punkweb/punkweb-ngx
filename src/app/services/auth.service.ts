import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpService } from './http.service';
import { environment } from '../../environments/environment';

interface Token {
  token: string;
  id: string;
}

@Injectable()
export class AuthService {

  public authUrl = `${environment.apiUrl}/token-auth/`;
  public usersUrl = `${environment.apiUrl}/users/`;
  public user: any = {};
  public user$ = new BehaviorSubject<any>({});

  constructor(
    private http: HttpService,
  ) {
    if (this.getAuthToken()) {
      this.getUser();
    }
  }

  public login(username, password) {
    return this.http.post(this.authUrl, {
      'username': username,
      'password': password
    }).do(
      (token: Token) => {
        this.setAuthToken(token);
        this.getUser();
      }
    );
  }

  public logout() {
    this.user = {};
    localStorage.removeItem('user');
    this.user$.next(this.user);
  }

  public getUser() {
    let fetchSub = this.http.get(`${this.usersUrl}${this.getAuthToken().id}/`).subscribe(
      (user) => {
        this.user = user;
        this.user$.next(user);
      },
      (err) => {},
      () => {
        fetchSub.unsubscribe();
      }
    );
  }

  public getAuthToken() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public setAuthToken(token: Token) {
    localStorage.setItem('user', JSON.stringify(token));
  }
}
