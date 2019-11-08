import {Injectable} from '@angular/core';
import * as socket from 'socket.io-client';
import Socket = SocketIOClient.Socket;
import {MaiPluginService} from './mai-plugin.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket: Socket;

  constructor(private pluginService: MaiPluginService) {
  }

  setup(): void {
    this.socket = socket('http://raspberrypi.local:3000/mai-frontend');

    this.socket.on('plugins', (data: any) => {
      this.pluginService.loadJSON(data.plugins);
    });
  }

  sendRunCommand(plugin: string, name: string, args?: string[]): void {
    this.socket.emit('run_command', {
      plugin,
      name,
      args
    });
  }
}
