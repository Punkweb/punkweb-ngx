import { NgModule } from '@angular/core';
import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ModalsModule } from './modules/modals/modals.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { HomeRoute } from './routes/home/home.route';

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
    HomeRoute,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' }
  ],
  entryComponents: [],
})
export class AppModule { }
