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
      this.api.Category.read(params['id']).subscribe((category) => {
        this.category = category;
        this.buildBreadcrumbs();
      });
      this.api.Subcategory.list({
        parent_id: params['id']
      }).subscribe((subcategories) => {
        this.subcategories = subcategories;
      });
    });
  }

  public routeToSubcategory(subcategoryId: any) {
    this.router.navigate(['/board/subcategory', subcategoryId]);
  }

  public routeToThread(threadId: any) {
    this.router.navigate(['/board/thread', threadId]);
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
