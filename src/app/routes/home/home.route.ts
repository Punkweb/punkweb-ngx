import { AfterViewInit, Component } from '@angular/core';
import { ModalService, ConfirmModalComponent } from '../../modules/modals';
import { ApiService, AuthService } from '../../services';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeRouteComponent implements AfterViewInit {

  public authUser = this.auth.user$.asObservable();
  public categories: any;
  public subcategories: any;

  constructor(
    private modals: ModalService,
    private api: ApiService,
    private auth: AuthService,
  ) {
    // this.authUser.subscribe((user) => {
    // });
  }

  public ngAfterViewInit() {
    // $('.post-editor').sceditor({
    //   plugins: 'bbcode',
    //   style: '../node_modules/sceditor/minified/jquery.sceditor.default.min.css'
    // });

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
