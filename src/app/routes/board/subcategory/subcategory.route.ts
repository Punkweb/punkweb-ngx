import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, SanitizeService } from '../../../services';

@Component({
  'selector': 'app-route-subcategory',
  'templateUrl': './subcategory.route.html',
  'styleUrls': ['./subcategory.route.scss']
})
export class BoardSubcategoryComponent {

  public breadcrumbs: any[];
  public subcategory: any;
  public threads: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private sanitizeService: SanitizeService,
  ) {
    this.route.params.subscribe((params) => {
      this.api.getSubcategory(params['id']).subscribe((subcategory) => {
        this.subcategory = subcategory;
        this.buildBreadcrumbs();
        this.api.getAllThreadsOfSubcategory(this.subcategory.id).subscribe((threads) => {
          this.threads = threads.results;
        });
      });
    });
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
        'text': this.subcategory.parent,
        'link': `/board/category/${this.subcategory.parent}`
      },
      {
        'text': this.subcategory.name,
        'link': null
      }
    ];
  }

  public sanitize(html: string) {
    return this.sanitizeService.cleanHtml(html);
  }
}
