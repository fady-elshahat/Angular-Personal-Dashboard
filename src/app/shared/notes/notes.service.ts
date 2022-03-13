import { Notes } from './notes.module';
import { Injectable } from '@angular/core';
import { StateService } from '../State/state.service';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  notes: Notes[] = [];
  constructor(private _StateService: StateService) {
    this._StateService.loadState('Notes', this.notes);
  }

  // Get All Note
  getNotes() {
    return this.notes;
  }

  // Get Note By Id
  getNote(id: string | null) {
    return this.notes.find((n) => n.id === id);
  }

  // Add Note in list
  addNote(note: Notes) {
    this.notes.push(note);
    this.state();
  }

  // Update Note By Id , Fields
  updateNote(id: string, updatedFields: Partial<Notes>) {
    const note = this.getNote(id);
    Object.assign(note, updatedFields);
    this.state();
  }

  // Delete Note of Notes List
  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    this.notes.splice(noteIndex, 1);
    this.state();
  }
  // Save to localStorage
  state() {
    return this._StateService.saveState(this.notes, 'Notes');
  }
}
