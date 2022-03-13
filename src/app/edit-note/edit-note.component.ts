import { Notes } from './../shared/notes/notes.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotesService } from '../shared/notes/notes.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  constructor(
    private _NotesService: NotesService,
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _NotificationService: NotificationService
  ) {}

  note: Notes | undefined;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((ParamMap: ParamMap) => {
      const idParam = ParamMap.get('id');
      this.note = this._NotesService.getNote(idParam);
    });
  }
  onSubmit(form: NgForm) {
    this._NotesService.updateNote(this.note!.id, form.value);
    this._Router.navigateByUrl('/notes');
    this._NotificationService.show('Note updated!');
  }
  deleteNote() {
    this._NotesService.deleteNote(this.note!.id);
    this._Router.navigateByUrl('/notes');
    this._NotificationService.show('Note deleted');
  }
}
