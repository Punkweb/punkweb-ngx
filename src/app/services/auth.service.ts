import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

interface Token {
  token: string;
  id: string;
}

@Injectable()
export class AuthService {

  public authUrl = 'http://localhost:8000/api/token-auth/';
  public usersUrl = `http://localhost:8000/api/users/`;
  public user: any = {};
  public user$ = new BehaviorSubject<any>({});

  constructor(
    private http: HttpClient,
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
    this.http.get(`${this.usersUrl}${this.getAuthToken().id}/`).subscribe((user) => {
      this.user = user;
      this.user$.next(user);
    });
  }

  public getAuthToken() {
    return JSON.parse(localStorage.getItem('user'));
  }

  public setAuthToken(token: Token) {
    localStorage.setItem('user', JSON.stringify(token));
  }
}
