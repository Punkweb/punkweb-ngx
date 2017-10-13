import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Route, HomeRoute, LoginRoute } from './routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeRoute
  },
  {
    path: 'login',
    component: LoginRoute
  },
  {
    path: '**',
    component: Error404Route
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
