import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { AuthService } from './auth.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = JSON.parse(localStorage.getItem('user'));
    if (authToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Token ${authToken.token}`)
      });
    }
    return next.handle(request);
  }
}
