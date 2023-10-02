import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.component.html',
  styleUrls: ['./task-input.component.css'],
})
export class TaskInputComponent {
  newTask: string = '';
  @Output() task = new EventEmitter<string>();

  addTask(newTask: string) {
    console.log(newTask);
    this.task.emit(newTask);
  }
}
