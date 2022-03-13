import { StateService } from './../State/state.service';
import { Todos } from './todos.module';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Todos[] = [];
  constructor(private _StateService: StateService) {
    this._StateService.loadState('Todos', this.todos);
  }

  // Get All Todos
  getTodos() {
    return this.todos;
  }

  // Get Todo By Id
  getTodo(id: string | null) {
    return this.todos.find((t) => t.id === id);
  }

  // Add Todo in list
  addTodo(todo: Todos) {
    this.todos.push(todo);
    this.state();
  }

  // Update Todo By Id , Fields
  updateTodo(id: string, updatedFields: Partial<Todos>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedFields);
    this.state();
  }

  // Delete Todo of Todos List
  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((n) => n.id === id);
    this.todos.splice(todoIndex, 1);
    this.state();
  }

  // Save to localStorage
  state() {
    return this._StateService.saveState(this.todos, 'Todos');
  }
}
