import { Component } from '@angular/core';
import { ModalService, ConfirmModalComponent } from '../../modules/modals/modals.module';

@Component({
  selector: 'app-route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRouteComponent {

  constructor(
    private modals: ModalService,
  ) { }

  public openModal() {
    this.modals.open(ConfirmModalComponent, {
      animation: 'scaleIn 1s',
      position: {
        top: '20vh',
      },
      width: '360px'
    }).subscribe((res) => {
      console.log(res);
    });
  }
}
