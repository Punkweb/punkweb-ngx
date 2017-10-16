import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
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
    private http: HttpClient,
    private modals: ModalService,
    private api: ApiService,
    private auth: AuthService,
  ) {
    this.api.getAllCategories().subscribe((categories) => {
      this.categories = categories;
      console.log(this.categories);
    });
    this.api.getAllSubcategories().subscribe((subcategories) => {
      this.subcategories = subcategories;
      console.log(this.subcategories);
    });
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
