import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInlineEditComponent } from './task-inline-edit.component';

describe('TaskInlineEditComponent', () => {
  let component: TaskInlineEditComponent;
  let fixture: ComponentFixture<TaskInlineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInlineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
