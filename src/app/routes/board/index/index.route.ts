import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, AuthService, SanitizeService } from '../../../services';

@Component({
  selector: 'app-board-index',
  templateUrl: './index.route.html',
  styleUrls: ['./index.route.scss']
})
export class BoardIndexComponent {

  public authUser = this.auth.user$.asObservable();
  public categories: any;

  constructor(
    private router: Router,
    private api: ApiService,
    private auth: AuthService,
    private sanitizeService: SanitizeService,
  ) {
    this.api.getAllCategories().subscribe((categories) => {
      this.categories = categories.results;
      this.categories.forEach((category) => {
        this.api.getSubcategoriesOfCategory(category.id).subscribe((subcategories) => {
          category.subcategories = subcategories.results;
        });
      });
      console.log(this.categories);
    });
  }

  public routeToCategory(category: any) {
    this.router.navigate(['/category', category.id]);
  }

  public sanitize(html: string) {
    return this.sanitizeService.cleanHtml(html);
  }
}
