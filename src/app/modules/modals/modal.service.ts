import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ModalOutletComponent } from './modal-outlet.component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ModalService {

  private outlet: ModalOutletComponent;
  private result: Subject<any> = new Subject();

  private optionDefaults = {
    animation: 'scaleIn .6s',
    backdropDisabled: false,
    closeDisabled: false,
    height: 'auto',
    width: 'auto',
    position: {},
    data: {},
  };

  constructor(private cfr: ComponentFactoryResolver) { }

  public open(component, options: any = {}) {
    if (this.outlet.active) {
      this.outlet.active.destroy();
    }
    const factory = this.cfr.resolveComponentFactory(component);
    this.outlet.active = this.outlet.content.createComponent(factory);
    if (options.data) {
      this.outlet.active.instance.data = options.data;
    }
    this.outlet.options = Object.assign({}, this.optionDefaults, options);
    this.outlet.visible = true;
    return this.result;
  }

  public close(result: any) {
    this.result.next(result);
    this.result.complete();
    this.result = new Subject();
    if (this.outlet.active) {
      this.outlet.active.destroy();
    }
    this.outlet.active = null;
    this.outlet.visible = false;
  }

  public setOutlet(_outlet: ModalOutletComponent) {
    this.outlet = _outlet;
  }
}
