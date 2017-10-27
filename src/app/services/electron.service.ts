import { Injectable } from '@angular/core';

@Injectable()
export class ElectronService {

  public instance: any;
  private ipcRenderer: any;

  constructor() {
    if (this.isElectron()) {
      this.instance = window['electron'];
      this.ipcRenderer = this.instance.ipcRenderer;
      this.registerIpcReceiver('pong', (event, arg) => {
        console.log('Ipc renderer up and running');
      });
      this.sendIpcEvent('ping');
    }
  }

  public sendIpcEvent(type: string, arg: any = null) {
    if (!this.isElectron()) {
      return;
    }
    this.ipcRenderer.send(type, arg);
  }

  public registerIpcReceiver(type: string, callback = (event: any, arg: any) => {}) {
    if (!this.isElectron()) {
      return;
    }
    this.ipcRenderer.on(type, callback);
  }

  public isElectron() {
    return !!window['electron'];
  }
}
