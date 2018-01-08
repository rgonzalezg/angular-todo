import { Component, Input,OnInit } from '@angular/core';

import { Task } from '../task/task.model';
@Component({
  selector: 'app-task-insert',
  template: `
	<div id="myDIV" class="header">
	  <h2>My To Do List</h2>
	  <input type="text" id="description" placeholder="Description..."  #newDescription >
	  <span name="insertTask" (click)="addTask(newDescription)" class="addBtn">Add</span>
	</div>
`,
  styleUrls: ['./task-insert.component.css']
})
export class TaskInsertComponent implements OnInit {
	@Input() tasks: Task[];

  constructor() { }
  addTask(description: HTMLInputElement): Boolean
  {
	  if (description.value == '') {return false;}
	  console.log(`adding new task ${description.value}`);
	  this.tasks.push(new Task(description.value));
	  description.value = '';
	  return false;
  }
  ngOnInit() {
  }

}
