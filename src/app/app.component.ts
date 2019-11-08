import {Component} from '@angular/core';
import {MaiPluginService} from "../services/mai-plugin.service";
import {MaiCommand, MaiPlugin} from "../objects/mai-plugin";
import {SocketService} from "../services/socket.service";
import {MatDialog} from "@angular/material/dialog";
import {CommandDialogComponent} from "./components/command-dialog/command-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog, private socketService: SocketService, private pluginService: MaiPluginService) {
    this.socketService.setup()
  }

  getPlugins(): MaiPlugin[] {
    return this.pluginService.plugins;
  }

  runCommand(plugin: MaiPlugin, command: MaiCommand) {
    if (command.handlerArguments) {
      const dialogRef = this.dialog.open(CommandDialogComponent, {
        data: {name: command.name, value: ''}
      });

      dialogRef.afterClosed().subscribe((result: string) => {
        this.socketService.sendRunCommand(plugin.name, command.name, [result])
      })

    } else {
      this.socketService.sendRunCommand(plugin.name, command.name)
    }
  }
}
