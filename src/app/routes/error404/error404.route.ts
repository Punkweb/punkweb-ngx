import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  'selector': 'app-route-error404',
  'templateUrl': './error404.route.html',
  'styleUrls': ['./error404.route.scss']
})
export class Error404Component {

  constructor(
    private router: Router,
  ) { }

  public goBack() {
    window.history.back();
  }

  public routeHome() {
    this.router.navigate(['/']);
  }
}
