import { Component, EventEmitter, Input, Output } from '@angular/core';
import { chunk as _chunk } from 'lodash';
import * as moment from 'moment';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {

  public _selected: moment.Moment;
  public currentMonth: number;
  public currentYear: number;
  public firstDayWeekday: number;
  public daysInMonth: number;

  @Output()
  public selectedChange = new EventEmitter();

  constructor() {
    let now = moment();
    this.currentMonth = now.month();
    this.currentYear = now.year();
    this.daysInMonth = now.daysInMonth();
    this.firstDayWeekday = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).day();
  }

  public back() {
    let current = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).subtract(1, 'months');
    this.currentMonth = current.month();
    this.currentYear = current.year();
    this.daysInMonth = current.daysInMonth();
    this.firstDayWeekday = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).day();
  }

  public forward() {
    let current = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).add(1, 'months');
    this.currentMonth = current.month();
    this.currentYear = current.year();
    this.daysInMonth = current.daysInMonth();
    this.firstDayWeekday = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).day();
  }

  public clickDay(day) {
    let dayAsMoment = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-${this.zeroPad(day)}`);
    if (!day) {
      return;
    }
    this.select(day);
  }

  public select(day) {
    this.selected = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-${this.zeroPad(day)}`);
  }

  public dayIsSelected(day) {
    if (!day || !this.selected) {
      return false;
    }
    let dayAsMoment = moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-${this.zeroPad(day)}`);
    return this.selected.isSame(dayAsMoment, 'day');
  }

  public daysInMonthArray() {
    let array = [];
    for (let i = 0; i < this.daysInMonth; i++) {
      array.push(i + 1);
    }
    return array;
  }

  public weekChunk() {
    let dimArray = this.daysInMonthArray();
    let firstWeek = []; // e.g: [null, null, null, null, null, 1, 2]
    let lastDayInFirstWeek = 0;
    let rest = [];
    for (let i = 0; i < this.firstDayWeekday; i++) {
      firstWeek.push(null);
    }
    for (let i = this.firstDayWeekday; i < 7; i++) {
      firstWeek.push(dimArray[i - this.firstDayWeekday]);
      lastDayInFirstWeek = i - this.firstDayWeekday;
    }
    for (let i = lastDayInFirstWeek + 1; i < dimArray.length; i++) {
      rest.push(dimArray[i]);
    }
    return _chunk(firstWeek.concat(rest), 7);
  }

  public formatHeader() {
    return moment(`${this.currentYear}-${this.zeroPad(this.currentMonth + 1)}-01`).format('MMMM YYYY');
  }

  public zeroPad(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  @Input()
  public get selected() {
    return this._selected;
  }

  public set selected(value) {
    this._selected = value;
    this.selectedChange.emit(this._selected);
    this.currentMonth = this._selected.month();
    this.currentYear = this._selected.year();
    this.daysInMonth = this._selected.daysInMonth();
  }
}
