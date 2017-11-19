import { Component } from '@angular/core';
import { WebsocketService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public wss: WebsocketService,
  ) { }
}
