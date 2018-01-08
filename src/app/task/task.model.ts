export class Task {
done: Boolean;
description: string;
removed: Boolean;

  constructor(description: string, done?:boolean) {
this.description = description;
this.done = done || false;
this.removed = false;
  }

}
