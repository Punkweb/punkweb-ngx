import {
  AfterViewInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

declare var CodeMirror: any;

@Component({
  selector: 'app-codemirror',
  template: `<textarea #codemirror></textarea>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodeMirrorComponent),
      multi: true
    }
  ],
})
export class CodeMirrorComponent implements AfterViewInit {

  @ViewChild('codemirror')
  public textarea;
  public codemirror;

  @Input()
  public options: any;

  private _value = '';

  @Output()
  public change = new EventEmitter();

  private optionDefaults = {
    indentUnit: 2,
    lineNumbers: true,
    mode: 'bbcode',
    theme: 'monokai'
  };

  constructor() { }

  public ngAfterViewInit() {
    this.codemirror = CodeMirror.fromTextArea(this.textarea.nativeElement, Object.assign({}, this.optionDefaults, this.options));
    this.codemirror.setValue(this._value);
    this.codemirror.on('change', () => {
      this.updateValue(this.codemirror.getValue());
    });
  }

  public updateValue(value) {
    this.value = value;
    this.onTouched();
    this.change.emit(value);
  }

  public writeValue(value) {
    this._value = value || '';
    if (this.codemirror) {
      this.codemirror.setValue(this._value);
    }
  }

  public onChange(e) { }

  public onTouched() { }

  public registerOnChange(fn) {
    this.onChange = fn;
  }

  public registerOnTouched(fn) {
    this.onTouched = fn;
  }

  @Input()
  get value() {
    return this._value;
  }

  set value(_value) {
    if (_value !== this._value) {
      this._value = _value;
      this.onChange(_value);
    }
  }
}
