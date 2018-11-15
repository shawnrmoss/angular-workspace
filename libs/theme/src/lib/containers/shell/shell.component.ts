import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

// Vendors
import { Observable } from 'rxjs';

// From Features
import { ThemeFacade } from '../../store';
import { getLocaleFirstDayOfWeek } from '@angular/common';

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
  rightSideNavOpen$: Observable<boolean>;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private themeFacade: ThemeFacade) {
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.logo$ = this.themeFacade.logo$;
    this.navigation$ = this.themeFacade.navigation$;
    this.loading$ = this.themeFacade.loading$;

    this.themeFacade.leftSideNavOpen$.subscribe(leftSideNavOpen => {
      this.leftSideNavOpen = leftSideNavOpen;
    });
    this.rightSideNavOpen$ = this.themeFacade.rightSideNavOpen$;
  }

  onToggleLeftSideNav() {
    this.themeFacade.toggleLeftSideNav();
  }

  onToggleRightSideNav(toggle: boolean) {
    this.themeFacade.toggleRightSideNav();
  }
}
