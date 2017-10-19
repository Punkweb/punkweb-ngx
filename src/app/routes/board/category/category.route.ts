import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, SanitizeService } from '../../../services';

@Component({
  'selector': 'app-route-category',
  'templateUrl': './category.route.html',
  'styleUrls': ['./category.route.scss']
})
export class BoardCategoryComponent {

  public breadcrumbs: any[];
  public category: any;
  public subcategories: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private sanitizeService: SanitizeService,
  ) {
    this.route.params.subscribe((params) => {
      this.api.getCategory(params['id']).subscribe((category) => {
        this.category = category;
        this.buildBreadcrumbs();
      });
      this.api.getSubcategoriesOfCategory(params['id']).subscribe((subcategories) => {
        this.subcategories = subcategories.results;
      });
    });
  }

  public buildBreadcrumbs() {
    this.breadcrumbs = [
      {
        'text': 'Forum',
        'link': '/board'
      },
      {
        'text': this.category.name,
        'link': null
      }
    ];
  }

  public sanitize(html: string) {
    return this.sanitizeService.cleanHtml(html);
  }
}
