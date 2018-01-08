export class Task {
  done: boolean;
  description: string;
  removed: boolean;

  constructor(description: string, done?: boolean) {
    this.description = description;
    this.done = done || false;
    this.removed = false;
  }

}
