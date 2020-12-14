import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // when we you pass in something like this [todo]="todo";
  // We need to label it as an Input
  // input property
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

}
