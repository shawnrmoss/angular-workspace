import { Action } from '@ngrx/store';

export enum ThemeActionTypes {
  ToggleLeftSidenav = '[Theme] Toggle left sidenav',
  ToggleRightSidenav = '[Theme] Toggle right sidenav',
  ToggleLoading = '[Theme] Toggle Loading',
  SelectLogo = '[Theme] Select logo',
  SelectTheme = '[Theme] Select theme',
  SelectNavigation = '[Theme] Select navigation'
}

export class ToggleLeftSidenav implements Action {
  readonly type = ThemeActionTypes.ToggleLeftSidenav;
  constructor() {}
}

export class ToggleRightSidenav implements Action {
  readonly type = ThemeActionTypes.ToggleRightSidenav;
  constructor() {}
}

export class ToggleLoading implements Action {
  readonly type = ThemeActionTypes.ToggleLoading;
  constructor() {}
}

export class SelectLogo implements Action {
  readonly type = ThemeActionTypes.SelectLogo;
  constructor(public logo: string) {}
}

export class SelectNavigation implements Action {
  readonly type = ThemeActionTypes.SelectNavigation;
  constructor(public navigation: any) {}
}

export class SelectTheme implements Action {
  readonly type = ThemeActionTypes.SelectTheme;
  constructor(public theme: string) {}
}

export type ThemeAction =
  | ToggleLeftSidenav
  | ToggleRightSidenav
  | ToggleLoading
  | SelectLogo
  | SelectTheme
  | SelectNavigation;

export const fromThemeActions = {
  ToggleLeftSidenav,
  ToggleRightSidenav,
  ToggleLoading,
  SelectLogo,
  SelectTheme,
  SelectNavigation
};
