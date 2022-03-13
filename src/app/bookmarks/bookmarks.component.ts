import { BookmarksService } from './../shared/bookmarks/bookmarks.service';
import { Component, OnInit } from '@angular/core';
import { BookMarks } from '../shared/bookmarks/bookMarks.module';
BookmarksService
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss'],
})
export class BookmarksComponent implements OnInit {
  constructor(private _BookmarksService: BookmarksService) {}
  bookMarks!: BookMarks[];

  ngOnInit(): void {
    this.bookMarks = this._BookmarksService.getBookMarks()
  }
}
