// From Core and Shared
import { Theme } from '@angular-workspace/theme';

// From Feature
import { SettingsActions, SettingsActionTypes } from '../actions';

export interface SettingsState {
  selectedTheme: Theme;
}

export const initialSettingsState: SettingsState = {
  selectedTheme: <Theme>{
    label: 'Default',
    value: 'default-theme'
  }
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
