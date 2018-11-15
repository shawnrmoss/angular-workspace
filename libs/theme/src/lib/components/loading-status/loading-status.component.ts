import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'aw-loading-status',
  templateUrl: './loading-status.component.html',
  styleUrls: ['./loading-status.component.scss']
})
export class LoadingStatusComponent implements OnInit {
  @HostBinding('class') class = 'aw-loading-bar';
  @Input('loading') loading: false;

  constructor() {}

  ngOnInit() {}
}
