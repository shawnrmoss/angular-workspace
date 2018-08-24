// Vendor
import { Action } from '@ngrx/store';

// From Feature
import { SettingsState } from '../reducers';
import { Theme } from '../../models';

export const SETTINGS_KEY = 'SETTINGS';

export enum SettingsActionTypes {
  CHANGE_THEME = '[Settings] Change Theme',
  PERSIST = '[Settings] Persist'
}

export class ChangeTheme implements Action {
  readonly type = SettingsActionTypes.CHANGE_THEME;
  constructor(public theme: Theme) {}
}

export class SettingsPersist implements Action {
  readonly type = SettingsActionTypes.PERSIST;
  constructor(public payload: { settings: SettingsState }) {}
}

export type SettingsActions = SettingsPersist | ChangeTheme;
