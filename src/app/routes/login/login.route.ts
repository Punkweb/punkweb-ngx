import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../modules/modals';
import { SignUpModalComponent } from '../../components';
import { AuthService } from '../../services';

@Component({
  'selector': 'app-route-login',
  'templateUrl': './login.route.html',
  'styleUrls': ['./login.route.scss']
})
export class LoginComponent {

  public username: string;
  public password: string;
  public errorMessage: string;

  public breadcrumbs = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'Sign in',
      link: null
    }
  ];

  constructor(
    private router: Router,
    private modals: ModalService,
    private auth: AuthService,
  ) { }

  public signInDisabled() {
    return !this.username || !this.password;
  }

  public signIn() {
    let signInSub = this.auth.login(this.username, this.password)
      .subscribe(
        (res) => {
          this.router.navigate(['/']);
        },
        (err) => {
          const error = JSON.parse(err.error);
          if (error.non_field_errors) {
            this.errorMessage = error.non_field_errors[0];
          }
        },
        () => {
          signInSub.unsubscribe();
        }
      );
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
