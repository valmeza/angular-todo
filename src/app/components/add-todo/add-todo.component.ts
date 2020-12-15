import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter(); // we have to catch this in the parent class
  title: string;

  constructor() {}

  ngOnInit(): void { }

  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    // just like delete we need to emit this upwards
    this.addTodo.emit(todo);
  }
}
