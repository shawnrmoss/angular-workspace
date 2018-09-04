import { Component, OnInit, Input, Output, HostBinding, EventEmitter } from '@angular/core';

@Component({
  selector: 'angular-workspace-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class AppBarComponent implements OnInit {
  @HostBinding('class') hostClasses = 'appbar';

  @Input('loading') loading: false;
  @Input('logo') logo: string;
  @Input('isDetailsPage') isDetailsPage: false;

  @Output() toggleLeftSideNav = new EventEmitter();
  @Output() toggleRightSideNav = new EventEmitter();
  @Output() back = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onToggleLeftSideNav(){
    this.toggleLeftSideNav.emit();
  }

  onToggleRightSideNav(){
    this.toggleRightSideNav.emit();
  }

  onBack(){
    this.back.emit();
  }

}
