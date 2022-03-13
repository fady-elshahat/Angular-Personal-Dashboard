import { Router } from '@angular/router';
import { BookmarksService } from './../shared/bookmarks/bookmarks.service';
import { BookMarks } from './../shared/bookmarks/bookMarks.module';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss'],
})
export class AddBookmarkComponent implements OnInit {
  constructor(
    private _BookmarksService: BookmarksService,
    private _Router: Router,
    private _NotificationService: NotificationService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    const bookmarks = new BookMarks(form.value.name, form.value.url);
    this._BookmarksService.addBookMark(bookmarks);
    this._Router.navigateByUrl('/bookmarks');
    this._NotificationService.show('Created bookmark!');
  }
}
