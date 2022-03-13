import { NotesService } from './../shared/notes/notes.service';
import { Notes } from './../shared/notes/notes.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit {
  notes: Notes[] = [];
  constructor(private _NotesService: NotesService) {}

  ngOnInit(): void {
    this.notes = this._NotesService.getNotes()
  }
}
