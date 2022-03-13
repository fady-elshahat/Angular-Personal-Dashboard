import { Notes } from './../shared/notes/notes.module';
import { NotesService } from './../shared/notes/notes.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification/notification.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})
export class AddNoteComponent implements OnInit {
  constructor(
    private _NotesService: NotesService,
    private _Router: Router,
    private _NotificationService: NotificationService
  ) {}

  showValidationErrors!: boolean;
  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    const note = new Notes(form.value.title, form.value.content);
    this._NotesService.addNote(note);
    this._Router.navigateByUrl('/notes');
    this._NotificationService.show('Created Note');
  }
}
