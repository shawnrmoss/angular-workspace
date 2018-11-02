import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ShellState, ThemeState } from '../reducers';

// Selectors
export const getThemeState = createFeatureSelector<ThemeState>('theme');

export const getShellState = createFeatureSelector<ShellState>('shell');

export const getSelectedTheme = createSelector(getShellState, (state: ShellState) => state.selectedTheme);

export const getThemes = createSelector(getShellState, (state: ShellState) => state.themes);

export const getLoading = createSelector(getShellState, (state: ShellState) => state.loading);

export const getLogo = createSelector(getShellState, (state: ShellState) => state.logo);

export const getSocialMediaLogos = createSelector(getShellState, (state: ShellState) => state.socialMediaLogos);

export const getNavigation = createSelector(getShellState, (state: ShellState) => state.navigation);

export const getLeftSideNavOpen = createSelector(getShellState, (state: ShellState) => state.leftSideNavOpen);

export const getRightSideNavOpen = createSelector(getShellState, (state: ShellState) => state.rightSideNavOpen);
