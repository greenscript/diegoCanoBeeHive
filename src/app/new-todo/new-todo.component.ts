import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @Input() title: string;
  @Input() todos: Todo[];

  public allTodos: number = 200;

  constructor() { }

  ngOnInit() {
  }

  addTodo() {
    this.allTodos = this.allTodos + 1;
    this.todos.push(
      new Todo(
        this.allTodos,
        11,
        this.title,
        false
      )
    );
    console.log(this.todos);
  }

}
