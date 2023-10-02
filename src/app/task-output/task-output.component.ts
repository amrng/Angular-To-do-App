import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-output',
  templateUrl: './task-output.component.html',
  styleUrls: ['./task-output.component.css'],
})
export class TaskOutputComponent {
  @Input() tasks!: { text: string; completed: boolean }[];
  @Output() completed = new EventEmitter<{
    text: string;
    completed: boolean;
  }>();
  @Output() deleted = new EventEmitter<{ text: string; completed: boolean }>();

  completedTask(tasks: { text: string; completed: boolean }) {
    this.completed.emit(tasks);
  }
  deletedTask(tasks: { text: string; completed: boolean }) {
    this.deleted.emit(tasks);
  }
}
