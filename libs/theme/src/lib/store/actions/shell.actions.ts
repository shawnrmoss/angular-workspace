import { Action } from '@ngrx/store';

export const SHELL_KEY = 'SHELL';

export enum ShellActionTypes {
  SET_LOGO = '[SHELL] Set logo',
  SET_NAVIGATION = '[SHELL] Set navigation',
  TOGGLE_NAV_SIDENAV = '[SHELL] Toggle Navigation Menu',
  TOGGLE_CALENDAR_SIDENAV = '[SHELL] Toggle Calendar Menu',
  TOGGLE_LOADING = '[SHELL] Toggle Loading'
}

export class ActionShellToggleSidenav implements Action {
  readonly type = ShellActionTypes.TOGGLE_NAV_SIDENAV;
  constructor(public payload: { toggle: boolean }) {}
}

export class ActionShellToggleCalendarSidenav implements Action {
  readonly type = ShellActionTypes.TOGGLE_CALENDAR_SIDENAV;
  constructor(public payload: { toggle: boolean }) {}
}

export class ActionShellToggleLoading implements Action {
  readonly type = ShellActionTypes.TOGGLE_LOADING;
  constructor(public payload: { toggle: boolean }) {}
}

export class ActionShellSetLogo implements Action {
  readonly type = ShellActionTypes.SET_LOGO;
  constructor(public payload: { logo: string }) {}
}

export class ActionShellSetNavigation implements Action {
  readonly type = ShellActionTypes.SET_NAVIGATION;
  constructor(public payload: { navigation: string[] }) {}
}

export type ShellActions =
  | ActionShellSetLogo
  | ActionShellSetNavigation
  | ActionShellToggleSidenav
  | ActionShellToggleCalendarSidenav
  | ActionShellToggleLoading;
