import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: any;
  newTodo: string = '';
  constructor() { 
    this.newTodo = '';
    this.todos = [];
  }

  ngOnInit() {
  }
  addTodo() {
    let todoObj = {
      text: this.newTodo,
      completed: false
    }
    this.todos.push(todoObj);
    this.newTodo = '';
  }
}
