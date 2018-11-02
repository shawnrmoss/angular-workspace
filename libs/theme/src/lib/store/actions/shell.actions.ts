import { Action } from '@ngrx/store';

export const SHELL_KEY = 'SHELL';

export enum ShellActionTypes {
  SetLogo = '[SHELL] Set logo',
  SetSocialMediaLogos = '[SHELL] Set social media logos',
  SetNavigation = '[SHELL] Set navigation',
  ToggleLeftSidenav = '[SHELL] Toggle left sidenav',
  ToggleRightSidenav = '[SHELL] Toggle right sidenav',
  ToggleLoading = '[SHELL] Toggle Loading',
  SetTheme = '[SHELL] Set Theme'
}

export class ToggleLeftSidenav implements Action {
  readonly type = ShellActionTypes.ToggleLeftSidenav;
  constructor(public payload: { toggle: boolean }) {}
}

export class ToggleRightSidenav implements Action {
  readonly type = ShellActionTypes.ToggleRightSidenav;
  constructor(public payload: { toggle: boolean }) {}
}

export class ToggleLoading implements Action {
  readonly type = ShellActionTypes.ToggleLoading;
  constructor(public payload: boolean) {}
}

export class SetLogo implements Action {
  readonly type = ShellActionTypes.SetLogo;
  constructor(public payload: { logo: string }) {}
}

export class SetSocialMediaLogos implements Action {
  readonly type = ShellActionTypes.SetSocialMediaLogos;
  constructor(public payload: { logos: any[] }) {}
}

export class SetNavigation implements Action {
  readonly type = ShellActionTypes.SetNavigation;
  constructor(public payload: { navigation: any }) {}
}

export class SetTheme implements Action {
  readonly type = ShellActionTypes.SetTheme;
  constructor(public payload: string) {}
}

export type ShellActions =
  | SetLogo
  | SetSocialMediaLogos
  | SetNavigation
  | ToggleLeftSidenav
  | ToggleRightSidenav
  | ToggleLoading
  | SetTheme;
