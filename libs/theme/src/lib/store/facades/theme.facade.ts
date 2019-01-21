import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

import { ThemeState } from '../reducers';
import { themeQuery } from '../selectors/theme.selectors';
import {
  ToggleLeftSidenav,
  ToggleRightSidenav,
  ToggleLoading,
  SelectLogo,
  SelectTheme,
  SelectNavigation
} from '../actions/theme.actions';

@Injectable()
export class ThemeFacade {
  loading$ = this.store.select(themeQuery.getLoading);
  loaded$ = this.store.select(themeQuery.getLoaded);
  logo$ = this.store.select(themeQuery.getLogo);
  navigation$ = this.store.select(themeQuery.getNavigation);
  leftSideNavOpen$ = this.store.select(themeQuery.getLeftSideNavOpen);
  rightSideNavOpen$ = this.store.select(themeQuery.getRightSideNavOpen);
  selectedTheme$ = this.store.select(themeQuery.getSelectedTheme);
  themes$ = this.store.select(themeQuery.getThemes);

  constructor(private store: Store<ThemeState>) {}

  selectLogo(logo: string) {
    this.store.dispatch(new SelectLogo(logo));
  }

  selectTheme(theme: string) {
    this.store.dispatch(new SelectTheme(theme));
  }

  selectNavigation(navigation: any) {
    this.store.dispatch(new SelectNavigation(navigation));
  }

  toggleLoading() {
    this.store.dispatch(new ToggleLoading());
  }

  toggleLeftSideNav() {
    this.store.dispatch(new ToggleLeftSidenav());
  }

  toggleRightSideNav() {
    this.store.dispatch(new ToggleRightSidenav());
  }
}
