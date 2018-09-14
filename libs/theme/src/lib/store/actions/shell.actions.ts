import { Action } from '@ngrx/store';

export const SHELL_KEY = 'SHELL';

export enum ShellActionTypes {
  SET_LOGO = '[SHELL] Set logo',
  SET_SOCIAL_MEDIA_LOGOS = '[SHELL] Set social media logos',
  SET_NAVIGATION = '[SHELL] Set navigation',
  TOGGLE_LEFT_SIDENAV = '[SHELL] Toggle left sidenav',
  TOGGLE_RIGHT_SIDENAV = '[SHELL] Toggle right sidenav',
  TOGGLE_LOADING = '[SHELL] Toggle Loading'
}

export class ToggleLeftSidenav implements Action {
  readonly type = ShellActionTypes.TOGGLE_LEFT_SIDENAV;
  constructor(public payload: { toggle: boolean }) { }
}

export class ToggleRightSidenav implements Action {
  readonly type = ShellActionTypes.TOGGLE_RIGHT_SIDENAV;
  constructor(public payload: { toggle: boolean }) { }
}

export class ToggleLoading implements Action {
  readonly type = ShellActionTypes.TOGGLE_LOADING;
  constructor(public payload: { toggle: boolean }) { }
}

export class SetLogo implements Action {
  readonly type = ShellActionTypes.SET_LOGO;
  constructor(public payload: { logo: string }) { }
}

export class SetSocialMediaLogos implements Action {
  readonly type = ShellActionTypes.SET_SOCIAL_MEDIA_LOGOS;
  constructor(public payload: { logos: any[] }) { }
}

export class SetNavigation implements Action {
  readonly type = ShellActionTypes.SET_NAVIGATION;
  constructor(public payload: { navigation: any }) { }
}

export type ShellActions =
  | SetLogo
  | SetSocialMediaLogos
  | SetNavigation
  | ToggleLeftSidenav
  | ToggleRightSidenav
  | ToggleLoading;
