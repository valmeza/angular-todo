import { TodoService } from './../../services/todo.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  // when we you pass in something like this [todo]="todo";
  // We need to label it as an Input
  // input property
  @Input() todo: Todo;

  // Now we are emitting something out to the parent component
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter(); // this deleteTodo we need to catch in the parent component

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed, // this.todo pertains to the todo that is passed in from the Input/property
    };

    return classes;
  }

  onToggle(todo) {
    // Toggle in UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
