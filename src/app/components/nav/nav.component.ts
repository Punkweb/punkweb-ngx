import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ModalService } from '../../modules/modals';
import { SignUpModalComponent } from '../sign-up/sign-up.modal';
import { AuthService } from '../../services';

@Component({
  'selector': 'app-nav',
  'templateUrl': './nav.component.html',
  'styleUrls': ['./nav.component.scss']
})
export class NavComponent implements OnDestroy, OnInit {

  public user = null;
  public authenticated = false;
  public superuser = false;

  private authSub: Subscription = null;

  constructor(
    private router: Router,
    private modals: ModalService,
    private auth: AuthService,
  ) { }

  public ngOnInit() {
    this.authSub = this.auth.user$.subscribe((user) => {
      this.user = user;
      this.authenticated = !!user.id;
      this.superuser = user.is_superuser;
    });
  }

  public ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

  public signOut() {
    this.auth.logout();
    this.router.navigate(['/login']);
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
