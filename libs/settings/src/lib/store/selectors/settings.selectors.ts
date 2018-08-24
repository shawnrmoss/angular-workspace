// Vendor
import { createFeatureSelector, createSelector } from '@ngrx/store';

// From Feature
import { SettingsState } from '../reducers';

// Selectors
export const getSettingsState = createFeatureSelector<SettingsState>(
  'Settings'
);

export const getSelectedTheme = createSelector(
  getSettingsState,
  (state: SettingsState) => state.selectedTheme
);

export const getThemes = createSelector(
  getSettingsState,
  (state: SettingsState) => state.themes
);
