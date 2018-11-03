import { Component, OnInit, OnDestroy } from '@angular/core';

// Vendors
import { Subject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

// From Features
import {
  getThemeState,
  ThemeState,
  ToggleLeftSidenav,
  ToggleRightSidenav,
  getLogo,
  getNavigation,
  getLoading,
  getLeftSideNavOpen,
  getRightSideNavOpen
} from '../../store';

@Component({
  selector: 'angular-workspace-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  logo$: Observable<string>;
  navigation$: Observable<string[]>;
  loading$: Observable<boolean>;

  leftSideNavOpen: boolean;
  rightSideNavOpen: boolean;

  constructor(private store: Store<ThemeState>) {}

  ngOnInit() {
    this.logo$ = this.store.select(getLogo);
    this.navigation$ = this.store.select(getNavigation);
    this.loading$ = this.store.select(getLoading);

    this.store.select(getLeftSideNavOpen).subscribe(leftSideNavOpen => {
      this.leftSideNavOpen = leftSideNavOpen;
    });
    this.store.select(getRightSideNavOpen).subscribe(rightSideNavOpen => {
      this.rightSideNavOpen = rightSideNavOpen;
    });
  }

  onToggleLeftSideNav(toggle: boolean) {
    this.store.dispatch(
      new ToggleLeftSidenav({
        toggle: !this.leftSideNavOpen
      })
    );
  }

  onToggleRightSideNav(toggle: boolean) {
    this.store.dispatch(
      new ToggleRightSidenav({
        toggle: !this.rightSideNavOpen
      })
    );
  }
}
