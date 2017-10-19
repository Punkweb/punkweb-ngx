import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService, SanitizeService } from '../../../services';

@Component({
  selector: 'app-board-index',
  templateUrl: './index.route.html',
  styleUrls: ['./index.route.scss']
})
export class BoardIndexComponent {

  public authUser = this.auth.user$.asObservable();
  public categories: any;
  public subcategories: any;

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private sanitizeService: SanitizeService,
  ) {
    this.api.getAllCategories().subscribe((categories) => {
      this.categories = categories.results;
    });
    this.api.getAllSubcategories().subscribe((subcategories) => {
      this.subcategories = subcategories.results;
    });
  }

  public sanitizeName(name: string) {
    return this.sanitizeService.cleanName(name);
  }
}
