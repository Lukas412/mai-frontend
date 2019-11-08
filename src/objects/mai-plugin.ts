export class MaiPlugin {

  expanded: boolean;

  name: string;
  displayName: string;

  commands: MaiCommand[];
  variables: MaiVariable[];

  constructor(json?: any) {
    this.commands = [];
    this.variables = [];

    if (json) {
      this.loadJSON(json);
    }
  }

  hasCommand(name: string): boolean {
    for (const command of this.commands) {
      if (command.name === name) {
        return true;
      }
    }
    return false;
  }

  getCommand(name: string): MaiCommand {
    for (const command of this.commands) {
      if (command.name === name) {
        return command;
      }
    }
  }

  loadJSON(json: any) {
    this.name = json.name;
    this.displayName = json.displayName;

    this.commands = [];
    if (json.commands) {
      for (const command of json.commands) {
        this.commands.push(new MaiCommand(command));
      }
    }

    this.variables = [];
    if (json.variables) {
      for (const variable of json.variables) {
        this.variables.push(new MaiVariable(variable));
      }
    }
  }
}


export class MaiCommand {

  name: string;
  handlerArguments: {name: string, type: string}[];

  constructor(json?: any) {
    if (json) {
      this.loadJSON(json);
    }
  }

  loadJSON(json: any): void {
    this.name = json.name;
    this.handlerArguments = json.handlerArguments;
  }
}


export class MaiVariable {

  name: string;
  value: string;
  type: string;

  constructor(json?: any) {
    if (json) {
      this.loadJSON(json);
    }
  }

  loadJSON(json: any): void {
    this.name = json.name;
    this.value = json.value;
    this.type = json.type;
  }
}
