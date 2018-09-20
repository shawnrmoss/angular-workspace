// From Core and Shared
import { Theme } from '@angular-workspace/theme';

// From Feature
import { SettingsActions, SettingsActionTypes } from '../actions';

export const initialState: SettingsState = {
  selectedTheme: <Theme>{
    label: 'Green',
    value: 'DEFAULT-THEME'
  }
};

export function settingsReducer(
  state: SettingsState = initialState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return { ...state, selectedTheme: action.theme };

    default:
      return state;
  }
}

export interface SettingsState {
  selectedTheme: Theme;
}
