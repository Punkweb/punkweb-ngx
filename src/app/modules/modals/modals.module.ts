import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalService } from './modal.service';
import { ModalOutletComponent } from './modal-outlet.component';
import { ConfirmModal } from './confirm.modal';

export { ModalService } from './modal.service';
export { ModalOutletComponent } from './modal-outlet.component';
export { ConfirmModal } from './confirm.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModalOutletComponent, ConfirmModal],
  providers: [ModalService],
  exports: [ModalOutletComponent, ModalOutletComponent, ConfirmModal],
  entryComponents: [ConfirmModal]
})
export class ModalsModule { }
