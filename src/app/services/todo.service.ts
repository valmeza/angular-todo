import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  addTodos(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions); // for delete we pass in url and httpOptions
  }

  // Toggle Completed
  // put request to update something on the server
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`; // the url and the todo id that we are trying to update
    return this.http.put(url, todo, httpOptions); // httpOptions is going to include the header of content type
    // put will pass in the url, the body of what is being updated, any httpOptions
  }
}
