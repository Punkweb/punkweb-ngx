import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ModalService, ConfirmModalComponent } from '../../modules/modals';
import { ApiService, AuthService, ElectronService } from '../../services';

@Component({
  selector: 'app-route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeComponent implements OnDestroy, OnInit {

  public user = null;
  public codemirrorValue = '[b]Bbcode CodeMirror mode[/b]';

  private authSub: Subscription = null;

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

  public ngOnInit() {
    this.authSub = this.auth.user$.subscribe((user) => {
      this.user = user;
    });
  }

  public ngOnDestroy() {
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
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
