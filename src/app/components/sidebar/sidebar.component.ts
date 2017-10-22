import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../modules/modals';
import { AuthService } from '../../services';

@Component({
  'selector': 'app-sidebar',
  'templateUrl': './sidebar.component.html',
  'styleUrls': ['./sidebar.component.scss']
})
export class SidebarComponent {

  public authUser = this.auth.user$.asObservable();

  public authenticated = false;
  public superuser = false;

  constructor(
    private router: Router,
    private modals: ModalService,
    private auth: AuthService,
  ) {
    this.authUser.subscribe((user) => {
      this.authenticated = !!user.id;
      this.superuser = user.is_superuser;
    });
  }
}
