import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ShellState, ThemeState, initialThemeState } from '../reducers';

// Selectors
export const getThemeState = createFeatureSelector<ThemeState>('ThemeStore');

export const getShellState = createSelector(getThemeState, (state: ThemeState) => state.shell);

export const getSelectedTheme = createSelector(getShellState, (state: ShellState) => state.selectedTheme);

export const getThemes = createSelector(getShellState, (state: ShellState) => state.themes);

export const getLoading = createSelector(getShellState, (state: ShellState) => state.loading);

export const getLogo = createSelector(getShellState, (state: ShellState) => state.logo);

export const getNavigation = createSelector(getShellState, (state: ShellState) => state.navigation);

export const getLeftSideNavOpen = createSelector(getShellState, (state: ShellState) => state.leftSideNavOpen);

export const getRightSideNavOpen = createSelector(getShellState, (state: ShellState) => state.rightSideNavOpen);
