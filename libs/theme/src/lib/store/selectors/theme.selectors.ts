import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from '../reducers';

// Lookup the 'Theme' feature state managed by NgRx
const getThemeState = createFeatureSelector<ThemeState>('ThemeStore');

const getLoading = createSelector(getThemeState, (state: ThemeState) => state.loading);

const getLoaded = createSelector(getThemeState, (state: ThemeState) => state.loaded);

const getLogo = createSelector(getThemeState, (state: ThemeState) => state.logo);

const getNavigation = createSelector(getThemeState, (state: ThemeState) => state.navigation);

const getLeftSideNavOpen = createSelector(getThemeState, (state: ThemeState) => state.leftSideNavOpen);

const getRightSideNavOpen = createSelector(getThemeState, (state: ThemeState) => state.rightSideNavOpen);

const getThemes = createSelector(getThemeState, (state: ThemeState) => state.themes);

const getSelectedTheme = createSelector(getThemeState, (state: ThemeState) => state.selectedTheme);

export const themeQuery = {
  getLoading,
  getLoaded,
  getLogo,
  getNavigation,
  getLeftSideNavOpen,
  getRightSideNavOpen,
  getThemes,
  getSelectedTheme
};
