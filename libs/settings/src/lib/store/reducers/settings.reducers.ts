// From Core and Shared
import { Theme } from '@angular-workspace/theme';

// From Feature
import { SettingsActions, SettingsActionTypes } from '../actions';
import { Settings } from '../../models';

export interface SettingsState {}

export const initialSettingsState: SettingsState = {};

export function settingsReducer(state: SettingsState = initialSettingsState, action: SettingsActions): SettingsState {
  switch (action.type) {
    default:
      return state;
  }
}
