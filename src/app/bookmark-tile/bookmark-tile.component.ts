import { BookMarks } from './../shared/bookmarks/bookMarks.module';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss'],
})
export class BookmarkTileComponent implements OnInit {
  @Input() bookMark!: BookMarks;

  tileIconSrc!: string;
  faviconError!: boolean ;
  constructor() {}

  ngOnInit(): void {
    this.tileIconSrc = this.bookMark.url + '/favicon.ico';
  }
}
