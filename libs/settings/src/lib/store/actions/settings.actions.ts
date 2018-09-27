// Vendor
import { Action } from '@ngrx/store';

// From Core and Shared
import { Theme } from '@angular-workspace/theme';

// From Feature
import { SettingsState } from '../reducers';

export const SETTINGS_KEY = 'SETTINGS';

export enum SettingsActionTypes {
  CHANGE_THEME = '[Settings] Change Theme',
  PERSIST = '[Settings] Persist'
}

export class ChangeTheme implements Action {
  readonly type = SettingsActionTypes.CHANGE_THEME;
  constructor(public theme: string) {}
}

export class SettingsPersist implements Action {
  readonly type = SettingsActionTypes.PERSIST;
  constructor(public payload: { settings: SettingsState }) {}
}

export type SettingsActions = SettingsPersist | ChangeTheme;
