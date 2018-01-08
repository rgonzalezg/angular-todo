import { Component, Input, OnInit } from '@angular/core';
import { Task } from './task.model';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

@Input() task: Task
  constructor() { 
  }
 
  markDone(): Boolean
  {
	  this.task.done = true;
	  console.log('test');
	  return false;
  }
  ngOnInit() {
  }

}
