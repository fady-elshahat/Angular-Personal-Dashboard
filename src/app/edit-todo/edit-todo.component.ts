import { Todos } from './../shared/todos/todos.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TodosService } from '../shared/todos/todos.service';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _TodosService: TodosService,
    private _Router: Router,
    private _NotificationService: NotificationService
  ) {}

  todo: Todos | undefined;

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const todoId = paramMap.get('id');
      this.todo = this._TodosService.getTodo(todoId);
    });
  }
  onSubmit(form: NgForm) {
    this._TodosService.updateTodo(this.todo!.id, form.value);
    this._Router.navigateByUrl('/todos');
    this._NotificationService.show('Todo updated!');
  }
}
