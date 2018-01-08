import { Component, Input ,OnInit } from '@angular/core';
import { Task } from '../task/task.model';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {
@Input() task: Task;

  constructor() { }

  taskDelete():Boolean
  {	  
	  console.log(`this is a test ${this.task.description}`);  
	  this.task.removed = true;
	  return false;
  }
  ngOnInit() {
  }

}
