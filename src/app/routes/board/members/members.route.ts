import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService, SanitizeService } from '../../../services';

@Component({
  selector: 'app-board-members',
  templateUrl: './members.route.html',
  styleUrls: ['./members.route.scss']
})
export class BoardMembersComponent {

  public authUser = this.auth.user$.asObservable();
  public breadcrumbs: any[];
  public users: any[];

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private sanitizeService: SanitizeService,
  ) {
    this.api.getAllUsers().subscribe((users) => {
      this.users = users.results;
    });
    this.buildBreadcrumbs();
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
