import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ModalsModule } from './modules/modals/modals.module';
import { SharedModule } from './shared/shared.module';

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

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ModalsModule,
    SharedModule,
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
    {provide: APP_BASE_HREF, useValue : '/' }
    // Services
  ],
  entryComponents: [
    SignUpModalComponent,
  ],
})
export class AppModule { }
