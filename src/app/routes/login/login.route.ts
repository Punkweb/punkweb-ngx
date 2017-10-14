import { Component } from '@angular/core';
import { ModalService } from '../../modules/modals/modals.module';
import { SignUpModalComponent } from '../../components';

@Component({
  'selector': 'app-route-login',
  'templateUrl': './login.route.html',
  'styleUrls': ['./login.route.scss']
})
export class LoginRouteComponent {

  constructor(
    private modalService: ModalService,
  ) { }

  public openSignUpModal() {
    this.modalService.open(SignUpModalComponent, {
      animation: 'scaleIn 1s',
      position: {
        top: '12rem',
        left: '6rem'
      },
      width: '320px'
    });
  }
}
