import { Component } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'modal-confirm',
  templateUrl: './confirm.modal.html',
  styleUrls: ['./confirm.modal.scss']
})
export class ConfirmModal {

  public data: any = {
    title: 'Confirm',
    body: 'Are you sure?',
    btnYes: 'Yes',
    btnCancel: 'Cancel'
  };

  constructor(
    private modals: ModalService,
  ) { }

  public cancel() {
    this.modals.close(this.data.btnCancel);
  }

  public yes() {
    this.modals.close(this.data.btnYes);
  }
}
