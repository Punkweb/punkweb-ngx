import { Component, AfterViewInit } from '@angular/core';
import { ModalService, ConfirmModalComponent } from '../../modules/modals';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRouteComponent implements AfterViewInit {

  constructor(
    private modals: ModalService,
  ) { }

  public ngAfterViewInit() {
    $('.post-editor').sceditor({
      plugins: 'bbcode',
      style: '../node_modules/sceditor/minified/jquery.sceditor.default.min.css'
    });
  }

  public openModal() {
    this.modals.open(ConfirmModalComponent, {
      position: {
        top: '20vh',
      },
      width: '360px'
    }).subscribe((res) => {
      console.log(res);
    });
  }
}
