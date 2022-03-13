import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BookmarksService } from './../shared/bookmarks/bookmarks.service';
import { BookMarks } from './../shared/bookmarks/bookMarks.module';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent implements OnInit {
  bookmark: BookMarks | undefined;
  constructor(
    private _BookmarksService: BookmarksService,
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _NotificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const bookmark = paramMap.get('id');
      this.bookmark = this._BookmarksService.getBookMark(bookmark);
    });
  }
  onSubmit(form: NgForm) {
    const { name, url } = form.value;
    this._BookmarksService.updateBookmark(this.bookmark!.id, {
      name,
      url: new URL(url),
    });
    this._Router.navigateByUrl('/bookmarks');
    this._NotificationService.show('Bookmark updated!');
  }
  delete() {
    this._BookmarksService.deleteBookmark(this.bookmark!.id);
    this._Router.navigateByUrl('/bookmarks');
    this._NotificationService.show('Deleted Bookmark');
  }
  cancel() {
    this._Router.navigateByUrl('/bookmarks');
  }
}
