import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  // you do not want the constructor to do much
  // constructor is mostly used to import services
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    // this.todos = [
    //   {
    //     id: 1,
    //     title: 'Todo 1',
    //     completed: false,
    //   },
    //   {
    //     id: 2,
    //     title: 'Todo 2',
    //     completed: true,
    //   },
    //   {
    //     id: 3,
    //     title: 'Todo 3',
    //     completed: false,
    //   }
    // ];
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
    // Instead of hard coding now we can use a service to get our todos
    // subscribe to the observable/asynchronous data stream
  }

}
