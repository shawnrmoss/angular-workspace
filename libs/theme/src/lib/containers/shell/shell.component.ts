import { Component, OnInit, OnDestroy } from '@angular/core';

// Vendors
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

// Core and Shared

// From Features
import {
  selectorTheme,
  ThemeState,
  ToggleLeftSidenav,
  ToggleRightSidenav
} from '../../store';

@Component({
  selector: 'angular-workspace-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();
  theme: ThemeState;

  constructor(private store: Store<any>) {
    store
      .select(selectorTheme)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(theme => {
        this.theme = theme;
      });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onToggleLeftSideNav() {
    this.store.dispatch(
      new ToggleLeftSidenav({
        toggle: !this.theme.shell.leftSideNavOpen
      })
    );
  }

  onToggleRightSideNav() {
    this.store.dispatch(
      new ToggleRightSidenav({
        toggle: !this.theme.shell.rightSideNavOpen
      })
    );
  }

  
}
