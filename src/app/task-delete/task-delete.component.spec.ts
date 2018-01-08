import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDeleteComponent } from './task-delete.component';

describe('TashDeleteComponent', () => {
  let component: TaskDeleteComponent;
  let fixture: ComponentFixture<TaskDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TashDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
