import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { PopoverModule } from '../popover';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PopoverModule,
  ],
  declarations: [
    DatePickerComponent,
    DateRangeComponent,
  ],
  providers: [],
  exports: [
    DatePickerComponent,
    DateRangeComponent,
  ],
})
export class CalendarModule { }
