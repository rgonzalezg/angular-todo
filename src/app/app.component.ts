import { Component } from '@angular/core';

import { Task } from './task/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tasks : Task[];
  
  constructor()
  {
	  this.tasks = [
	  new Task('test')
	  ];
  }

  	sortedTasks(): Task[] {
 return this.tasks.filter(
      t => t.removed === false).sort((a: Task, b: Task) => {if(a.done) {
        return -1;
    } else {
        return 1;
 }}).reverse();
 }
}
