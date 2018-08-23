import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'angular-workspace-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @HostBinding('class') hostClasses = 'toolbar';
  @Input('logo') logo: string;
  @Input('icon') icon = 'menu';
  @Input('loading') loading: false;
  @Output() leftNavigationToggle = new EventEmitter();
  @Output() rightNavigationToggle = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  toggleLeftSideNav() {
    this.leftNavigationToggle.emit();
  }

  toggleRightSideNav() {
    this.rightNavigationToggle.emit();
  }
}
