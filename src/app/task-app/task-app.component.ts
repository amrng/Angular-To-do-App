import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task-app.component.html',
  styleUrls: ['./task-app.component.css'],
})
export class TaskAppComponent {
  tasks: Array<{ text: string; completed: boolean }> = [];
  newTask: string = '';

  addTask(newTask: string) {
    if (newTask.trim() !== '') {
      this.tasks.push({ text: newTask, completed: false });
      this.newTask = ''; // eh lazmetha
    }
  }

  completed(task: { text: string; completed: boolean }) {
    task.completed = !task.completed;
  }

  deleted(task: { text: string; completed: boolean }) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }
}
