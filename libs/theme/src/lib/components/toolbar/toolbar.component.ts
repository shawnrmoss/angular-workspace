import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  HostBinding
} from '@angular/core';

@Component({
  selector: 'angular-workspace-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
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
