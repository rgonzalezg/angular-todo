import { Component, Input } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html'
})
export class TaskDeleteComponent {
  @Input() task: Task;

  taskDelete(): boolean {
    console.log(`this is a test ${this.task.description}`);
    this.task.removed = true;
    return false;
  }

}
