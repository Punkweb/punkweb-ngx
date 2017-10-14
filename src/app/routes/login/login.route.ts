import { Component } from '@angular/core';
import { ModalService } from '../../modules/modals';
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
      position: {
        top: '12rem'
      },
      width: '320px'
    });
  }
}
