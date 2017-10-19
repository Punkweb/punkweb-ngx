import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BoardCategoryComponent,
  BoardIndexComponent,
  BoardMembersComponent,
  Error404Component,
  HomeComponent,
  LoginComponent,
} from './routes';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'board',
    component: BoardIndexComponent
  },
  {
    path: 'category/:id',
    component: BoardCategoryComponent
  },
  {
    path: 'board/members',
    component: BoardMembersComponent
  },
  {
    path: 'board/login',
    component: LoginComponent
  },
  {
    path: '**',
    component: Error404Component
  },
];

@NgModule({
  // Have to useHash for electron to work,
  // if the project doesn't need to run in electron, the {useHash: true} bit can be removed
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
