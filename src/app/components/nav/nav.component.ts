import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../modules/modals';
import { SignUpModalComponent } from '../sign-up/sign-up.modal';
import { AuthService } from '../../services';

@Component({
  'selector': 'app-nav',
  'templateUrl': './nav.component.html',
  'styleUrls': ['./nav.component.scss']
})
export class NavComponent {

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

  public signOut() {
    this.auth.logout();
    this.router.navigate(['/board/login']);
  }

  public openSignUpModal() {
    this.modals.open(SignUpModalComponent, {
      position: {
        top: '12rem'
      },
      width: '320px'
    });
  }
}
