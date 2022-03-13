import { Router } from '@angular/router';
import { TodosService } from './../shared/todos/todos.service';
import { Todos } from './../shared/todos/todos.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification/notification.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  constructor(
    private _TodosService: TodosService,
    private _Router: Router,
    private _NotificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const todo = new Todos(form.value.text);
    this._TodosService.addTodo(todo);
    this._Router.navigateByUrl('/todos');
    this._NotificationService.show('Todo created!');
  }
}
