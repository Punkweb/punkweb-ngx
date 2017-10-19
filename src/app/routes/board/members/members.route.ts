import { Component, OnInit } from '@angular/core';
import { ApiService, AuthService, SanitizeService } from '../../../services';

@Component({
  selector: 'app-board-members',
  templateUrl: './members.route.html',
  styleUrls: ['./members.route.scss']
})
export class BoardMembersComponent {

  public authUser = this.auth.user$.asObservable();

  constructor(
    private api: ApiService,
    private auth: AuthService,
    private sanitizeService: SanitizeService,
  ) {
  }

  public sanitizeName(name: string) {
    return this.sanitizeService.cleanName(name);
  }
}
