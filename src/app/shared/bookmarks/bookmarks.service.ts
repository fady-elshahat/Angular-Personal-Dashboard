import { Injectable } from '@angular/core';
import { StateService } from '../State/state.service';
import { BookMarks } from './bookMarks.module';

@Injectable({
  providedIn: 'root',
})
export class BookmarksService {
  constructor(private _StateService: StateService) {
    this._StateService.loadState('BookMark', this.bookMarks);
  }

  bookMarks: BookMarks[] = [];

  // Get All BookMarks
  getBookMarks() {
    return this.bookMarks;
  }

  // Get BookMark By Id
  getBookMark(id: string | null) {
    return this.bookMarks.find((b) => b.id === id);
  }

  // Add BookMark in list
  addBookMark(bookMarks: BookMarks) {
    this.bookMarks.push(bookMarks);
    this.state();
  }

  // Update BookMarks By Id , Fields
  updateBookmark(id: string, updatedFields: Partial<BookMarks>) {
    const bookMarks = this.getBookMark(id);
    Object.assign(bookMarks, updatedFields);
    this.state();
  }

  // Delete bookMark of bookMarks List

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookMarks.findIndex((b) => b.id === id);
    this.bookMarks.splice(bookmarkIndex, 1);
    this.state();
  }

  // Save to localStorage
  state() {
    return this._StateService.saveState(this.bookMarks, 'BookMark');
  }
}
