// From Feature
import { SettingsActions, SettingsActionTypes } from '../actions';
import { Theme } from '../../models';

export const initialState: SettingsState = {
  selectedTheme: <Theme>{
    label: 'Green',
    value: 'DEFAULT-THEME'
  },
  themes: [
    <Theme>{
      label: 'Green',
      value: 'DEFAULT-THEME'
    },
    <Theme>{
      label: 'Light',
      value: 'LIGHT-THEME'
    },
    <Theme>{
      label: 'Dark',
      value: 'DARK-THEME'
    }
  ]
};

export function settingsReducer(
  state: SettingsState = initialState,
  action: SettingsActions
): SettingsState {
  switch (action.type) {
    case SettingsActionTypes.CHANGE_THEME:
      return { ...state, selectedTheme: action.payload.theme };

    default:
      return state;
  }
}

export interface SettingsState {
  selectedTheme: Theme;
  themes: Theme[];
}
