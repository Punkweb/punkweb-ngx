import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface PopoverOptions {
  animation?: string;
  backgroundColor?: string;
  fontColor?: string;
  border?: string;
  borderRadius?: string;
  fontSize?: string;
  fontFamily?: string;
  relativeTop?: string;
  relativeBottom?: string;
  relativeLeft?: string;
  relativeRight?: string;
  width?: string;
  zIndex?: number;
}

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent {

  private _options: PopoverOptions;
  private _visible = false;

  private defaultOptions: PopoverOptions = {
    animation: 'scaleIn .4s',
    backgroundColor: 'white',
    fontColor: '#343a40',
    border: '1px solid #dcdcdc',
    borderRadius: '4px',
    fontSize: '1em',
    fontFamily: `'Roboto', sans-serif`,
    width: 'auto',
    zIndex: 10
  };

  @Output()
  public visibleChange = new EventEmitter();

  constructor() {
    this._options = this.defaultOptions;
  }

  public close() {
    this.visible = false;
  }

  @Input()
  public get options() {
    return this._options;
  }

  public set options(value) {
    this._options = Object.assign({}, this.defaultOptions, value);
  }

  @Input()
  public get visible() {
    return this._visible;
  }

  public set visible(value) {
    this._visible = value;
    this.visibleChange.emit(value);
  }
}
