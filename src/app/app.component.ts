import { Component } from '@angular/core';
import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  tasks: Task[];

  constructor() {
    this.tasks = [
      new Task('test')
    ];
  }

  sortedTasks(): Task[] {
     return this.tasks.filter(t => t.removed === false)
       .sort((a: Task) => a.done ? -1 : 1)
       .reverse();
 }
}
