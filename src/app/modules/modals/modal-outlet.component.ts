import { Component, OnInit, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-outlet',
  templateUrl: './modal-outlet.component.html',
  styleUrls: ['./modal-outlet.component.scss'],
})
export class ModalOutletComponent {

  @ViewChild('content', { read: ViewContainerRef })
  public content;

  public active: ComponentRef<any>;

  public visible = false;
  public options: any = {};

  constructor(private modalService: ModalService) {
    this.modalService.setOutlet(this);
  }

  public close() {
    this.modalService.close(null);
  }
}
