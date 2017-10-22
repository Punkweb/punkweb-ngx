import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalService, ConfirmModalComponent } from '../../modules/modals';
import { ApiService, AuthService } from '../../services';

declare var jquery: any;
declare var $: any;
declare var CodeMirror: any;

@Component({
  selector: 'app-route-home',
  templateUrl: './home.route.html',
  styleUrls: ['./home.route.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('codemirrorTextarea')
  public codemirrorTextarea;
  public codemirror;

  public authUser = this.auth.user$.asObservable();

  public title: string;
  public tags: string;
  public category = 'fa17dbdd-1db5-4065-8e9b-299f00a31905';

  constructor(
    private modals: ModalService,
    private api: ApiService,
    private auth: AuthService,
  ) {
    // this.authUser.subscribe((user) => {
    // });
  }

  public ngAfterViewInit() {
    this.codemirror = CodeMirror.fromTextArea(this.codemirrorTextarea.nativeElement, {
      indentUnit: 2,
      lineNumbers: true,
      mode: 'bbcode',
      theme: 'monokai'
    });
  }

  public postThread() {
    this.api.postThread({
      title: this.title,
      category: this.category,
      tags: this.tags,
      content: this.codemirror.getValue()
    }).subscribe(() => {});
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
