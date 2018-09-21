// From Feature
import { createFeatureSelector } from '@ngrx/store';
import { ThemeState, initialThemeState } from '../reducers';

export * from './shell.selectors';

export const getThemeState = state =>
  <ThemeState>(state.theme || initialThemeState);
