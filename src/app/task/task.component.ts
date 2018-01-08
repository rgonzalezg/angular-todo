import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  markDone(): Boolean {
    this.task.done = !this.task.done;
    console.log('test');
    return false;
  }

  ngOnInit() {
  }

}
