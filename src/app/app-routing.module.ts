import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  Error404RouteComponent,
  HomeRouteComponent,
  LoginRouteComponent,
} from './routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeRouteComponent
  },
  {
    path: 'login',
    component: LoginRouteComponent
  },
  {
    path: '**',
    component: Error404RouteComponent
  },
];

@NgModule({
  // Have to useHash for electron to work,
  // if the project doesn't need to run in electron, the {useHash: true} bit can be removed
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
