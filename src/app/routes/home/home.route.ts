import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalService, ConfirmModalComponent } from '../../modules/modals';
import { ApiService, AuthService, ElectronService } from '../../services';

@Component({
  selector: 'app-route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeComponent {

  public user: any = {};
  public codemirrorValue = '[b]Bbcode CodeMirror mode[/b]';

  constructor(
    private modals: ModalService,
    private api: ApiService,
    private auth: AuthService,
    public electron: ElectronService,
  ) {
    this.auth.user$.subscribe((user) => {
      this.user = user;
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
