import { Todos } from './../shared/todos/todos.module';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todoItem!: Todos;
  @Output() DeleteClick: EventEmitter<Todos> = new EventEmitter();
  @Output() EditClick: EventEmitter<Todos> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDeleteClick() {
    this.DeleteClick.emit();
  }
  onEditClick() {
    this.EditClick.emit()
  }
}
