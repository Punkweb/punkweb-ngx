import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, AuthService, SanitizeService } from '../../../services';

@Component({
  selector: 'app-board-thread',
  templateUrl: './thread.route.html',
  styleUrls: ['./thread.route.scss']
})
export class BoardThreadComponent {

  public authUser = this.auth.user$.asObservable();
  public breadcrumbs: any[];
  public thread: any;
  public posts: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private auth: AuthService,
    private sanitizeService: SanitizeService,
  ) {
    this.route.params.subscribe((params) => {
      this.api.Thread.read(params['id']).subscribe((thread) => {
        this.thread = thread;
        this.buildBreadcrumbs();
        this.api.Post.list().subscribe((posts) => {
          this.posts = posts;
        });
      });
    });
  }

  public buildBreadcrumbs() {
    return [
      {
        'text': 'Forum',
        'link': '/board/',
      },
      {
        'text': 'Members',
        'link': null
      }
    ];
  }

  public sanitize(html: string) {
    return this.sanitizeService.cleanHtml(html);
  }
}
