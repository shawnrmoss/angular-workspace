import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'angular-workspace-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  @HostBinding('class') hostClasses = 'toolbar';
  @Input('loading') loading: false;

  constructor() {}

  ngOnInit() {}
}
