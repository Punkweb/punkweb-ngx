import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalService, ConfirmModalComponent } from '../../modules/modals';
import { ApiService, AuthService } from '../../services';

@Component({
  selector: 'app-route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeComponent {

  public authUser = this.auth.user$.asObservable();
  public codemirrorValue = '[b]Bbcode CodeMirror mode[/b]';

  constructor(
    private modals: ModalService,
    private api: ApiService,
    private auth: AuthService,
  ) { }

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
