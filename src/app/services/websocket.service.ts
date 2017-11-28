import { Injectable } from '@angular/core';

interface WebsocketEvents {
  onOpen(event: any): void;
  onMessage(event: any): void;
  onClose(event: any): void;
  onError(event: any): void;
}

class WebsocketConnection {

  public _events: WebsocketEvents;
  public instance: WebSocket;

  constructor(
    public url: string,
    public reconnect = false,
    public reconnectInterval?: number,
  ) { }

  public open() {
    this.instance = new WebSocket(this.url);
    this.instance.onopen = (event) => {
      console.log(event);
      this._events.onOpen(event);
    };
    this.instance.onmessage = (event) => {
      console.log(event);
      this._events.onMessage(event);
    };
    this.instance.onclose = (event) => {
      console.log(event);
      this._events.onClose(event);
    };
    this.instance.onerror = (event) => {
      console.log(event);
      this._events.onError(event);
    };
  }

  public send(message: any) {
    this.instance.send(message);
  }

  get events(): WebsocketEvents {
    return this._events;
  }

  set events(_events: WebsocketEvents) {
    this._events = _events;
  }
}

@Injectable()
export class WebsocketService {

  public connection: WebsocketConnection;

  constructor() {
    this.connection = new WebsocketConnection('ws://demos.kaazing.com/echo');
    this.connection.events = {
      onOpen: (event) => {
        this.connection.send('Ayyy');
      },
      onMessage: (event) => {},
      onClose: (event) => {},
      onError: (event) => {}
    };
    this.connection.open();
  }
}
