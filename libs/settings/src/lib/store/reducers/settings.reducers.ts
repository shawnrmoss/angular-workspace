// From Core and Shared
import { Theme } from '@angular-workspace/theme';

// From Feature
import { SettingsActions, SettingsActionTypes } from '../actions';
import { Settings } from '../../models';

export interface SettingsState {
  selectedTheme: string;
  settings: Settings;
}

export const initialSettingsState: SettingsState = {
  selectedTheme: 'default-theme',
  settings: null
};

export function settingsReducer(
  state: SettingsState = initialSettingsState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return { ...state, selectedTheme: action.theme };

    default:
      return state;
  }
}
