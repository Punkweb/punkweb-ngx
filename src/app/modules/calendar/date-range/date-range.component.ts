import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PopoverOptions } from '../../popover';
import * as moment from 'moment';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.scss']
})
export class DateRangeComponent {

  private _startDate;
  private _endDate;
  private _datePickerOverrides;

  public dateSegmentVisible = false;
  public datePickerVisible = false;
  public datePickerDefaults: PopoverOptions = {
    relativeTop: '29px',
    width: '685px',
  };
  public datePickerOptions = this.datePickerDefaults;
  public dropdownOptions: PopoverOptions = {
    relativeTop: '29px',
    width: '200px',
  };

  @ViewChild('startDatePicker')
  public startDatePicker;

  @ViewChild('endDatePicker')
  public endDatePicker;

  @Output()
  public startDateChange = new EventEmitter();

  @Output()
  public endDateChange = new EventEmitter();

  constructor() {
    this.setRange('today');
  }

  public openDatePicker() {
    this.datePickerVisible = true;
  }

  public openDateSegment() {
    this.dateSegmentVisible = true;
  }

  public selectedRange() {
    let diffDays = this.endDate.diff(this.startDate, 'days', true);
    let diffMonths = this.endDate.diff(this.startDate, 'months', true);
    let diffYears = this.endDate.diff(this.startDate, 'years', true);
    if (this.endDate.date() === moment().date()) {
      if (this.startDate.isBefore(moment('2015-01-02'))) {
        return 'All';
      } else if (diffYears >= 1 && diffYears <= 1.005) {
        return 'This Year';
      } else if (diffMonths >= 1 && diffMonths <= 1.035) {
        return 'This Month';
      } else if (diffDays >= 14 && diffDays <= 15) {
        return 'Two Weeks';
      } else if (diffDays >= 7 && diffDays <= 8) {
        return 'This Week';
      } else if (diffDays >= 0 && diffDays <= 1) {
        return 'Today';
      }
    }
    return 'Custom';
  }

  public setRange(range) {
    switch (range) {
      case 'today':
        this.startDate = moment().startOf('day');
        this.endDate = moment().endOf('day');
        break;
      case 'week':
        this.startDate = moment().subtract(1, 'weeks').startOf('day');
        this.endDate = moment().endOf('day');
        break;
      case 'month':
        this.startDate = moment().subtract(1, 'months').startOf('day');
        this.endDate = moment().endOf('day');
        break;
      case 'year':
        this.startDate = moment().subtract(1, 'years').startOf('day');
        this.endDate = moment().endOf('day');
        break;
      case 'twoWeeks':
        this.startDate = moment().subtract(2, 'weeks').startOf('day');
        this.endDate = moment().endOf('day');
        break;
      case 'all':
        this.startDate = moment('2015-01-01');
        this.endDate = moment().endOf('day');
        break;
    }
    this.dateSegmentVisible = false;
  }

  @Input()
  public get startDate() {
    return this._startDate;
  }

  public set startDate(value) {
    this._startDate = value;
    this.startDateChange.emit(value);
  }

  @Input()
  public get endDate() {
    return this._endDate;
  }

  public set endDate(value) {
    this._endDate = value;
    this.endDateChange.emit(value);
  }

  @Input()
  public get datePickerOverrides() {
    return this._datePickerOverrides;
  }

  public set datePickerOverrides(value: PopoverOptions) {
    this._datePickerOverrides = value;
    this.datePickerOptions = Object.assign({}, this.datePickerDefaults, this.datePickerOverrides);
  }
}
