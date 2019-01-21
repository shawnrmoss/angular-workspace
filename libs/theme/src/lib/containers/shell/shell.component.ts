import { Component, OnInit } from '@angular/core';

// Vendors
import { Observable } from 'rxjs';

// From Features
import { ThemeFacade } from '../../store';

@Component({
  selector: 'angular-workspace-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  logo$: Observable<string>;
  navigation$: Observable<string[]>;
  loading$: Observable<boolean>;

  leftSideNavOpen$: Observable<boolean>;
  rightSideNavOpen$: Observable<boolean>;

  constructor(private themeFacade: ThemeFacade) {}

  ngOnInit() {
    this.logo$ = this.themeFacade.logo$;
    this.navigation$ = this.themeFacade.navigation$;
    this.loading$ = this.themeFacade.loading$;

    this.leftSideNavOpen$ = this.themeFacade.leftSideNavOpen$;
    this.rightSideNavOpen$ = this.themeFacade.rightSideNavOpen$;
  }

  onToggleLeftSideNav() {
    this.themeFacade.toggleLeftSideNav();
  }

  onToggleRightSideNav(toggle: boolean) {
    this.themeFacade.toggleRightSideNav();
  }
}
