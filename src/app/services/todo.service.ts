import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos'; // set the url to a property
  todosLimit = '?_limit=5';

  // in order to use HttpClient we need to inject it in the constructor
  constructor(private http: HttpClient) {}

  // returns an Todo Observable
  getTodos(): Observable<Todo[]> {
    // now to make the request
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimit}`); // get takes in the url
    //----------Todo type array
  }
}
