import { Injectable } from '@angular/core';

@Injectable()
export class ElectronService {

  public instance: any;
  private ipcRenderer: any;

  constructor() {
    if (this.isElectron()) {
      this.instance = window['electron'];
      this.ipcRenderer = this.instance.ipcRenderer;
      this.notify('punkweb-ngx', 'Ipc renderer up and running. Click this notification to play ping pong.', () => {
        this.sendIpcEvent('ping', 'ping');
      });
      // Play ping pong with IPC
      this.registerIpcReceiver('pong', (event, arg) => {
        this.notify('punkweb-ngx', arg, () => {
          this.sendIpcEvent('ping', 'ping');
        });
      });
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

  public notify(title: string, body: string, click = () => {}) {
    const notification = new Notification(title, {
      body: body
    });
    notification.onclick = click;
  }

  public isElectron() {
    return !!window['electron'];
  }
}
