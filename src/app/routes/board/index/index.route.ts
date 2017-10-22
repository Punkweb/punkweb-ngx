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
    this.api.Category.paged().subscribe((categories) => {
      this.categories = categories.results;
      this.categories.forEach((category) => {
        this.api.Subcategory.list({
          parent_id: category.id
        }).subscribe((subcategories) => {
          category.subcategories = subcategories;
        });
      });
    });
  }

  public routeToCategory(categoryId: any) {
    this.router.navigate(['/board/category', categoryId]);
  }

  public routeToSubcategory(subcategoryId: any) {
    this.router.navigate(['/board/subcategory', subcategoryId]);
  }

  public routeToThread(threadId: any) {
    this.router.navigate(['/board/thread', threadId]);
  }

  public sanitize(html: string) {
    return this.sanitizeService.cleanHtml(html);
  }
}
