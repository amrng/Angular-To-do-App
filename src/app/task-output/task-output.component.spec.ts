import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskOutputComponent } from './task-output.component';

describe('TaskOutputComponent', () => {
  let component: TaskOutputComponent;
  let fixture: ComponentFixture<TaskOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskOutputComponent]
    });
    fixture = TestBed.createComponent(TaskOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
