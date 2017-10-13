import { Component } from '@angular/core';
import { ModalService, ConfirmModal } from '../../modules/modals/modals.module';

@Component({
  selector: 'route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRoute {

  constructor(
    private modals: ModalService,
  ) { }

  public openModal() {
    this.modals.open(ConfirmModal, {
      animation: 'slideInTop 1s',
      position: {
        top: '20vh',
      },
      width: '360px'
    }).subscribe((res) => {
      console.log(res);
    });
  }
}
