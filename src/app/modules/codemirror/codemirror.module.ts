import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CodeMirrorComponent } from './codemirror.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    CodeMirrorComponent,
  ],
  exports: [
    CodeMirrorComponent,
  ]
})
export class CodeMirrorModule { }
