import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  // you do not want the constructor to do much
  // constructor is mostly used to import services
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
    // Instead of hard coding now we can use a service to get our todos
    // subscribe to the observable/asynchronous data stream
  }

  addTodo(todo: Todo) {
    // make a post request to our server through the service
    // once we get our response we add it to our UI.
    this.todoService.addTodos(todo).subscribe((todo) => {
      this.todos.push(todo); // once we get our response push it to the todos array
    });
  }

  deleteTodo(todo: Todo) {
    // filter is like foreach or map it will loop through all the todos
    // but we can add a conditional with filter
    // this removes it from the UI but not the server
    this.todos = this.todos.filter((t) => t.id !== todo.id); // in this case return anything that does not equal this id

    this.todoService.deleteTodo(todo).subscribe(); // this will remove it from the server
  }
}
