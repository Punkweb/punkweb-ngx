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

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private sanitizeService: SanitizeService,
  ) {
    this.breadcrumbs = [
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
