import { Component, OnInit, OnDestroy } from '@angular/core';

// Vendors
import { Subject, Observable } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
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
export class ShellComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  logo$: Observable<string>;
  navigation$: Observable<string[]>;
  loading$: Observable<boolean>;

  leftSideNavOpen$: Observable<boolean>;
  rightSideNavOpen$: Observable<boolean>;

  constructor(private store: Store<ThemeState>) {}

  ngOnInit() {
    this.logo$ = this.store.select(getLogo);
    this.navigation$ = this.store.select(getNavigation);
    this.loading$ = this.store.select(getLoading);
    this.leftSideNavOpen$ = this.store.select(getLeftSideNavOpen);
    this.rightSideNavOpen$ = this.store.select(getRightSideNavOpen);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onToggleLeftSideNav() {
    this.store.dispatch(
      new ToggleLeftSidenav({
        toggle: !this.leftSideNavOpen$.pipe(take(1))
      })
    );
  }

  onToggleRightSideNav(toggle: boolean) {
    this.store.dispatch(
      new ToggleRightSidenav({
        toggle: !this.rightSideNavOpen$.pipe(take(1))
      })
    );
  }
}
