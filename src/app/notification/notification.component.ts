import { transition, trigger, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NotificationData } from '../shared/notification/notification-data';
import { NotificationService } from '../shared/notification/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('notificationAnim', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)',
        }),
        animate('150ms 125ms ease-out'),
      ]),
      transition(':leave', [
        animate(
          125,
          style({
            opacity: 0,
            transform: 'scale(0.85)',
          })
        ),
      ]),
    ]),
  ],
})
export class NotificationComponent implements OnInit {

  
  constructor(private _NotificationService: NotificationService) {}

  timeout: any;
  notification!: NotificationData[] | null;

  ngOnInit(): void {
    this._NotificationService.notifications.subscribe(
      (notification: NotificationData) => {
        this.notification = Array(notification);

        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
          this.notification = null;
        }, notification.duration);
      }
    );
  }
}
