import { Component, OnInit, OnDestroy } from '@angular/core';

// Vendors
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';

// Core and Shared

// From Features
import { selectorTheme, ThemeState, ToggleRightSidenav } from '../../store';
import { Back } from '@angular-workspace/core';

@Component({
  selector: 'angular-workspace-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
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
  
  onBack() {
    this.store.dispatch(new Back());
  }

  onToggleRightSideNav() {
    this.store.dispatch(
      new ToggleRightSidenav({
        toggle: !this.theme.shell.rightSideNavOpen
      })
    );
  }
}
