import { BookmarksService } from './../shared/bookmarks/bookmarks.service';
import { Component, OnInit } from '@angular/core';
import { BookMarks } from '../shared/bookmarks/bookMarks.module';

@Component({
  selector: 'app-manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss'],
})
export class ManageBookmarksComponent implements OnInit {
  bookmarks!: BookMarks[];
  constructor(private _BookmarksService: BookmarksService) {}
  choose: boolean = true;
  ngOnInit(): void {
    this.bookmarks = this._BookmarksService.getBookMarks();
  }
}
