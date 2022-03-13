import { trigger, animate, transition, style } from '@angular/animations';
import { Router } from '@angular/router';
import { Todos } from './../shared/todos/todos.module';
import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos/todos.service';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  animations: [
    trigger('todoItemAnim', [
      transition(':leave', [
        animate(
          200,
          style({
            opacity: 0,
            height: 0,
            marginBottom: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class TodosComponent implements OnInit {
  todos!: Todos[];
  constructor(
    private _TodosService: TodosService,
    private _Router: Router,
    private _NotificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.todos = this._TodosService.getTodos();
  }
  toggleCompleted(todo: Todos) {
    this._TodosService.updateTodo(todo.id, { completed: !todo.completed }); 
  }
  onDeleteClick(todo: Todos) {
    this._TodosService.deleteTodo(todo.id);
    this._NotificationService.show('Todo deleted!');
  }
  onEditClick(todo: Todos) {
    this._Router.navigate(['/todos', todo.id]);
  }
}
