import {Injectable} from '@angular/core';
import {MaiPlugin} from "../objects/mai-plugin";

@Injectable({
  providedIn: 'root'
})
export class MaiPluginService {

  plugins: MaiPlugin[];

  constructor() {
    this.plugins = [];
  }

  hasPlugin(name: string): boolean {
    for (const plugin of this.plugins) {
      if (plugin.name === name) {
        return true;
      }
    }
    return false;
  }

  getPlugin(name: string): MaiPlugin {
    for (const plugin of this.plugins) {
      if (plugin.name === name) {
        return plugin;
      }
    }
  }

  loadJSON(json: any) {
    console.log(json);

    for (const pluginJson of json) {
      if (this.hasPlugin(pluginJson.name)) {
        this.getPlugin(pluginJson.name).loadJSON(pluginJson);

      } else {
        this.plugins.push(new MaiPlugin(pluginJson));
      }
    }
  }
}
