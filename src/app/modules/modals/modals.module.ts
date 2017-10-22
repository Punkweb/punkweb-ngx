import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalService } from './modal.service';
import { ModalOutletComponent } from './modal-outlet.component';
import { ConfirmModalComponent } from './confirm.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ModalOutletComponent, ConfirmModalComponent],
  providers: [ModalService],
  exports: [ModalOutletComponent, ModalOutletComponent, ConfirmModalComponent],
  entryComponents: [ConfirmModalComponent]
})
export class ModalsModule { }
