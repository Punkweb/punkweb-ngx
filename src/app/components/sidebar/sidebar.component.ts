import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  'selector': 'app-sidebar',
  'templateUrl': './sidebar.component.html',
  'styleUrls': ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(
    private router: Router,
  ) { }

  public routeHome() {
    this.router.navigate(['/home']);
  }

  public routeLogin() {
    this.router.navigate(['/login']);
  }
}
