import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService, SanitizeService } from '../../services';

@Component({
  selector: 'app-route-board',
  templateUrl: './board.route.html',
  styleUrls: ['./board.route.scss']
})
export class BoardRouteComponent {

  public authUser = this.auth.user$.asObservable();
  public categories: any;
  public subcategories: any;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private sanitizeService: SanitizeService,
  ) {
    this.api.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.api.getAllSubcategories().subscribe((subcategories) => {
      this.subcategories = subcategories;
    });
  }

  public sanitizeName(name: string) {
    return this.sanitizeService.cleanName(name);
  }
}
