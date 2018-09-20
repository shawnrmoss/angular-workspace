import { createSelector, createFeatureSelector } from '@ngrx/store';

// From Feature
import { ShellState } from '../reducers';

// Selectors
export const getShellState = createFeatureSelector<ShellState>('Shell');

export const getThemes = createSelector(
  getShellState,
  (state: ShellState) => state.themes
);
