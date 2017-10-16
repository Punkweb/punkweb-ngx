import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ModalsModule } from './modules/modals/modals.module';

// Main app
import { AppComponent } from './app.component';

// Routes
import {
  Error404RouteComponent,
  HomeRouteComponent,
  LoginRouteComponent,
} from './routes';

// Components
import {
  NavComponent,
  SidebarComponent,
  SignUpModalComponent,
} from './components';

// Services
import {
  ApiService,
  AuthService,
  AuthTokenInterceptor,
} from './services';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ModalsModule,
  ],
  declarations: [
    AppComponent,
    // Routes
    Error404RouteComponent,
    HomeRouteComponent,
    LoginRouteComponent,
    // Components
    NavComponent,
    SidebarComponent,
    SignUpModalComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    // Services
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true},
    ApiService,
    AuthService,
  ],
  entryComponents: [
    SignUpModalComponent,
  ],
})
export class AppModule { }
