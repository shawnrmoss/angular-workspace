import { createSelector } from '@ngrx/store';

// From Feature
import { ThemeState, initialThemeState } from '../reducers';

// Selectors
export const getThemeState = state =>
  <ThemeState>(state.theme || initialThemeState);

export const getThemes = createSelector(
  getThemeState,
  (state: ThemeState) => state.shell.themes
);
