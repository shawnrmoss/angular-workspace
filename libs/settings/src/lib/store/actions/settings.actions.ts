// Vendor
import { Action } from '@ngrx/store';

// From Feature
import { SettingsState } from '../reducers';

export const SETTINGS_KEY = 'SETTINGS';

export enum SettingsActionTypes {
  PERSIST = '[Settings] Persist'
}

export class SettingsPersist implements Action {
  readonly type = SettingsActionTypes.PERSIST;
  constructor(public payload: { settings: SettingsState }) {}
}

export type SettingsActions = SettingsPersist;
