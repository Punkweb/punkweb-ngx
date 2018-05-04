import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopoverComponent } from './popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PopoverComponent],
  providers: [],
  exports: [PopoverComponent],
})
export class PopoverModule { }
