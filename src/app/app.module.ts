import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskInsertComponent } from './task-insert/task-insert.component';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { TaskInlineEditComponent } from './task-inline-edit/task-inline-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskInsertComponent,
    TaskDeleteComponent,
    TaskInlineEditComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
